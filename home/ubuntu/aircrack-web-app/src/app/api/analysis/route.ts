import { NextRequest, NextResponse } from 'next/server';
import { D1Database } from '@cloudflare/workers-types';

export const runtime = 'edge';

// GET /api/analysis/network-stats - Netzwerkstatistiken abrufen
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const network_id = searchParams.get('network_id');
  const analysis_type = searchParams.get('type') || 'general';
  
  try {
    const db = (request.env as any).DB as D1Database;
    
    // Validierung
    if (!network_id) {
      return NextResponse.json(
        { success: false, error: 'Netzwerk-ID ist erforderlich' },
        { status: 400 }
      );
    }
    
    // Prüfen, ob das Netzwerk existiert
    const { results: networkResults } = await db
      .prepare('SELECT * FROM networks WHERE id = ?')
      .bind(network_id)
      .all();
    
    if (networkResults.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Netzwerk nicht gefunden' },
        { status: 404 }
      );
    }
    
    const network = networkResults[0];
    
    // Verschiedene Analysetypen
    switch (analysis_type) {
      case 'general': {
        // Allgemeine Netzwerkstatistiken
        const { results: packetStats } = await db
          .prepare(`
            SELECT 
              COUNT(*) as total_packets,
              SUM(CASE WHEN packet_type = 'management' THEN 1 ELSE 0 END) as management_packets,
              SUM(CASE WHEN packet_type = 'control' THEN 1 ELSE 0 END) as control_packets,
              SUM(CASE WHEN packet_type = 'data' THEN 1 ELSE 0 END) as data_packets,
              AVG(signal_strength) as avg_signal_strength,
              MIN(timestamp) as first_packet_time,
              MAX(timestamp) as last_packet_time
            FROM packets
            WHERE network_id = ?
          `)
          .bind(network_id)
          .all();
        
        // Verbundene Geräte (eindeutige MAC-Adressen)
        const { results: connectedDevices } = await db
          .prepare(`
            SELECT DISTINCT source_mac
            FROM packets
            WHERE network_id = ? AND source_mac != ? AND source_mac NOT LIKE 'FF:FF:FF:FF:FF:FF'
            LIMIT 50
          `)
          .bind(network_id, network.bssid)
          .all();
        
        return NextResponse.json({ 
          success: true, 
          network: network,
          stats: packetStats[0],
          connected_devices: connectedDevices.length,
          devices: connectedDevices
        });
      }
      
      case 'traffic': {
        // Verkehrsanalyse (Paketgrößen und -typen)
        const { results: trafficStats } = await db
          .prepare(`
            SELECT 
              packet_type,
              COUNT(*) as count,
              AVG(size) as avg_size,
              SUM(size) as total_size
            FROM packets
            WHERE network_id = ?
            GROUP BY packet_type
          `)
          .bind(network_id)
          .all();
        
        return NextResponse.json({ 
          success: true, 
          network: network,
          traffic_stats: trafficStats
        });
      }
      
      case 'security': {
        // Sicherheitsanalyse
        const { results: attackHistory } = await db
          .prepare(`
            SELECT * FROM attack_simulations
            WHERE network_id = ?
            ORDER BY start_time DESC
          `)
          .bind(network_id)
          .all();
        
        // Sicherheitsbewertung basierend auf Verschlüsselungstyp
        let security_score = 0;
        let security_issues = [];
        
        switch (network.encryption_type) {
          case 'Open':
            security_score = 0;
            security_issues.push('Keine Verschlüsselung');
            break;
          case 'WEP':
            security_score = 20;
            security_issues.push('Veraltete und unsichere WEP-Verschlüsselung');
            break;
          case 'WPA':
            security_score = 60;
            security_issues.push('Veraltete WPA-Verschlüsselung');
            break;
          case 'WPA2':
            security_score = 80;
            security_issues.push('WPA2 kann anfällig für KRACK-Angriffe sein');
            break;
          case 'WPA2-Enterprise':
            security_score = 90;
            break;
          case 'WPA3':
            security_score = 95;
            break;
          default:
            security_score = 50;
        }
        
        return NextResponse.json({ 
          success: true, 
          network: network,
          security_score: security_score,
          security_issues: security_issues,
          attack_history: attackHistory
        });
      }
      
      default:
        return NextResponse.json(
          { success: false, error: 'Unbekannter Analysetyp' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Fehler bei der Netzwerkanalyse:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler bei der Netzwerkanalyse' },
      { status: 500 }
    );
  }
}

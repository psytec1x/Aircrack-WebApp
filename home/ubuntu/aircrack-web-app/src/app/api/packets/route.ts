import { NextRequest, NextResponse } from 'next/server';
import { D1Database } from '@cloudflare/workers-types';

export const runtime = 'edge';

// GET /api/packets - Liste aller Pakete abrufen
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '50');
  const offset = parseInt(searchParams.get('offset') || '0');
  const network_id = searchParams.get('network_id');
  
  try {
    const db = (request.env as any).DB as D1Database;
    
    let query = `
      SELECT p.*, n.ssid, n.bssid 
      FROM packets p
      LEFT JOIN networks n ON p.network_id = n.id
    `;
    
    const params = [];
    
    if (network_id) {
      query += ' WHERE p.network_id = ?';
      params.push(network_id);
    }
    
    query += ' ORDER BY p.timestamp DESC LIMIT ? OFFSET ?';
    params.push(limit, offset);
    
    const { results } = await db
      .prepare(query)
      .bind(...params)
      .all();
    
    return NextResponse.json({ success: true, packets: results });
  } catch (error) {
    console.error('Fehler beim Abrufen der Pakete:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Abrufen der Pakete' },
      { status: 500 }
    );
  }
}

// POST /api/packets - Neues Paket hinzufügen (für Simulationszwecke)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      network_id, 
      packet_type, 
      source_mac, 
      destination_mac, 
      frame_type, 
      frame_subtype, 
      size, 
      signal_strength, 
      channel, 
      raw_data 
    } = body;
    
    // Validierung
    if (!packet_type || !source_mac || !destination_mac || !size) {
      return NextResponse.json(
        { success: false, error: 'Erforderliche Felder fehlen' },
        { status: 400 }
      );
    }
    
    const db = (request.env as any).DB as D1Database;
    
    const { success } = await db
      .prepare(`
        INSERT INTO packets (
          network_id, packet_type, source_mac, destination_mac, 
          frame_type, frame_subtype, size, signal_strength, 
          channel, raw_data
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `)
      .bind(
        network_id, packet_type, source_mac, destination_mac, 
        frame_type, frame_subtype, size, signal_strength, 
        channel, raw_data
      )
      .run();
    
    if (success) {
      return NextResponse.json({ success: true, message: 'Paket erfolgreich hinzugefügt' });
    } else {
      return NextResponse.json(
        { success: false, error: 'Fehler beim Hinzufügen des Pakets' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Fehler beim Hinzufügen des Pakets:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Hinzufügen des Pakets' },
      { status: 500 }
    );
  }
}

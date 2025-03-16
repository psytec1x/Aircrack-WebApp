import { NextRequest, NextResponse } from 'next/server';
import { D1Database } from '@cloudflare/workers-types';

export const runtime = 'edge';

// GET /api/networks - Liste aller Netzwerke abrufen
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '50');
  const offset = parseInt(searchParams.get('offset') || '0');
  
  try {
    const db = (request.env as any).DB as D1Database;
    
    const { results } = await db
      .prepare(`
        SELECT * FROM networks
        ORDER BY signal_strength DESC
        LIMIT ? OFFSET ?
      `)
      .bind(limit, offset)
      .all();
    
    return NextResponse.json({ success: true, networks: results });
  } catch (error) {
    console.error('Fehler beim Abrufen der Netzwerke:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Abrufen der Netzwerke' },
      { status: 500 }
    );
  }
}

// POST /api/networks - Neues Netzwerk hinzufügen (für Simulationszwecke)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { ssid, bssid, channel, encryption_type, signal_strength } = body;
    
    // Validierung
    if (!ssid || !bssid || !channel || !encryption_type || !signal_strength) {
      return NextResponse.json(
        { success: false, error: 'Alle Felder sind erforderlich' },
        { status: 400 }
      );
    }
    
    const db = (request.env as any).DB as D1Database;
    
    const { success } = await db
      .prepare(`
        INSERT INTO networks (ssid, bssid, channel, encryption_type, signal_strength)
        VALUES (?, ?, ?, ?, ?)
      `)
      .bind(ssid, bssid, channel, encryption_type, signal_strength)
      .run();
    
    if (success) {
      return NextResponse.json({ success: true, message: 'Netzwerk erfolgreich hinzugefügt' });
    } else {
      return NextResponse.json(
        { success: false, error: 'Fehler beim Hinzufügen des Netzwerks' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Fehler beim Hinzufügen des Netzwerks:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Hinzufügen des Netzwerks' },
      { status: 500 }
    );
  }
}

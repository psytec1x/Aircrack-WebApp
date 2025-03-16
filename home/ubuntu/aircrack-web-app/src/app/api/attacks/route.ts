import { NextRequest, NextResponse } from 'next/server';
import { D1Database } from '@cloudflare/workers-types';

export const runtime = 'edge';

// GET /api/attacks - Liste aller Angriffssimulationen abrufen
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '50');
  const offset = parseInt(searchParams.get('offset') || '0');
  const network_id = searchParams.get('network_id');
  const status = searchParams.get('status');
  
  try {
    const db = (request.env as any).DB as D1Database;
    
    let query = `
      SELECT a.*, n.ssid, n.bssid 
      FROM attack_simulations a
      LEFT JOIN networks n ON a.network_id = n.id
      WHERE 1=1
    `;
    
    const params = [];
    
    if (network_id) {
      query += ' AND a.network_id = ?';
      params.push(network_id);
    }
    
    if (status) {
      query += ' AND a.status = ?';
      params.push(status);
    }
    
    query += ' ORDER BY a.start_time DESC LIMIT ? OFFSET ?';
    params.push(limit, offset);
    
    const { results } = await db
      .prepare(query)
      .bind(...params)
      .all();
    
    return NextResponse.json({ success: true, attacks: results });
  } catch (error) {
    console.error('Fehler beim Abrufen der Angriffssimulationen:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Abrufen der Angriffssimulationen' },
      { status: 500 }
    );
  }
}

// POST /api/attacks - Neue Angriffssimulation starten
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { network_id, attack_type } = body;
    
    // Validierung
    if (!network_id || !attack_type) {
      return NextResponse.json(
        { success: false, error: 'Netzwerk-ID und Angriffstyp sind erforderlich' },
        { status: 400 }
      );
    }
    
    const db = (request.env as any).DB as D1Database;
    
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
    
    // Angriffssimulation starten
    const { success, meta } = await db
      .prepare(`
        INSERT INTO attack_simulations (network_id, attack_type, status, progress)
        VALUES (?, ?, 'running', 0)
      `)
      .bind(network_id, attack_type)
      .run();
    
    if (success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Angriffssimulation gestartet', 
        attack_id: meta.last_row_id 
      });
    } else {
      return NextResponse.json(
        { success: false, error: 'Fehler beim Starten der Angriffssimulation' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Fehler beim Starten der Angriffssimulation:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Starten der Angriffssimulation' },
      { status: 500 }
    );
  }
}

// PUT /api/attacks/:id - Angriffssimulation aktualisieren
export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  if (!id) {
    return NextResponse.json(
      { success: false, error: 'Angriffs-ID ist erforderlich' },
      { status: 400 }
    );
  }
  
  try {
    const body = await request.json();
    const { status, progress, result } = body;
    
    const db = (request.env as any).DB as D1Database;
    
    let query = 'UPDATE attack_simulations SET ';
    const params = [];
    const updates = [];
    
    if (status) {
      updates.push('status = ?');
      params.push(status);
      
      if (status === 'completed' || status === 'failed') {
        updates.push('end_time = CURRENT_TIMESTAMP');
      }
    }
    
    if (progress !== undefined) {
      updates.push('progress = ?');
      params.push(progress);
    }
    
    if (result) {
      updates.push('result = ?');
      params.push(result);
    }
    
    if (updates.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Keine Aktualisierungen angegeben' },
        { status: 400 }
      );
    }
    
    query += updates.join(', ') + ' WHERE id = ?';
    params.push(id);
    
    const { success } = await db
      .prepare(query)
      .bind(...params)
      .run();
    
    if (success) {
      return NextResponse.json({ success: true, message: 'Angriffssimulation aktualisiert' });
    } else {
      return NextResponse.json(
        { success: false, error: 'Fehler beim Aktualisieren der Angriffssimulation' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Fehler beim Aktualisieren der Angriffssimulation:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Aktualisieren der Angriffssimulation' },
      { status: 500 }
    );
  }
}

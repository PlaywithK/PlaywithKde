import { NextResponse } from 'next/server';

export async function GET() {
  const STEAM_VANITY = 'playwithk';

  try {
    const steamRes = await fetch(`https://steamcommunity.com/id/${STEAM_VANITY}/games?tab=recent&xml=1`);

    if (!steamRes.ok) {
      return NextResponse.json({ error: 'Steam API Fehler' }, { status: steamRes.status });
    }

    const xmlText = await steamRes.text();

    return new Response(xmlText, {
      status: 200,
      headers: { 'Content-Type': 'application/xml' },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Interner Serverfehler' }, { status: 500 });
  }
}
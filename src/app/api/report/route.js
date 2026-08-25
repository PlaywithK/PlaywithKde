import { NextResponse } from "next/server";

const WEBHOOK_URL = process.env.DISCORD_REPORT_WEBHOOK_URL;

export async function POST(req) {
    const body = await req.json();
    const { title, description, category } = body;

    if (!title || !description) {
        return NextResponse.json(
            { error: "Titel und Beschreibung erforderlich" },
            { status: 400 }
        );
    }

    if (title.length > 200 || description.length > 2000) {
        return NextResponse.json({ error: "Text zu lang" }, { status: 400 });
    }

    const discordRes = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            embeds: [
                {
                    title: `Neuer Report: ${title}`,
                    description,
                    color: 0xd85a30,
                    fields: category ? [{ name: "Kategorie", value: category, inline: true }] : [],
                    timestamp: new Date().toISOString(),
                    footer: { text: "Anonymer Report über die Website" },
                },
            ],
        }),
    });

    if (!discordRes.ok) {
        return NextResponse.json(
            { error: "Report konnte nicht gesendet werden" },
            { status: 502 }
        );
    }

    return NextResponse.json({ success: true });
}
import { NextResponse } from "next/server";
import { getForumPosts, createForumPost } from "@/lib/discord";

export const revalidate = 60;

export async function GET() {
    try {
        const data = await getForumPosts();
        return NextResponse.json(data);
    } catch (err) {
        console.error("Discord Forum Error:", err);

        return NextResponse.json(
            {
                error: "Forum could not be loaded.",
                details: err instanceof Error ? err.message : String(err),
            },
            { status: 502 }
        );
    }
}

export async function POST(req) {
    try {
        const { title, content, tags } = await req.json();

        if (!title?.trim() || !content?.trim()) {
            return NextResponse.json(
                { error: "Titel und Inhalt sind erforderlich." },
                { status: 400 }
            );
        }

        if (!tags || tags.length === 0) {
            return NextResponse.json(
                { error: "Mindestens ein Tag ist erforderlich." },
                { status: 400 }
            );
        }

        if (title.length > 100) {
            return NextResponse.json(
                { error: "Titel darf maximal 100 Zeichen lang sein." },
                { status: 400 }
            );
        }

        const post = await createForumPost({ title, content, tags });

        return NextResponse.json({ success: true, post });
    } catch (err) {
        console.error("Discord Forum Post Error:", err);

        return NextResponse.json(
            {
                error: "Post could not be created.",
                details: err instanceof Error ? err.message : String(err),
            },
            { status: 502 }
        );
    }
}
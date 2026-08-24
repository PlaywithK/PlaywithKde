import { NextResponse } from "next/server";
import { getForumPost } from "@/lib/discord";

export async function GET(request, { params }) {
    try {
        const { postId } = await params;

        const data = await getForumPost(postId);

        if (!data) {
            return NextResponse.json(
                { error: "Could not find post with postId" },
                { status: 404 }
            );
        }

        return NextResponse.json(data);
    } catch (err) {
        console.error("Forum Post Error:", err);

        return NextResponse.json(
            {
                error: "Beitrag konnte nicht geladen werden",
                details:
                    err instanceof Error
                        ? err.message
                        : String(err),
            },
            { status: 502 }
        );
    }
}
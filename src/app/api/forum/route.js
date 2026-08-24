import { NextResponse } from "next/server";
import { getForumPosts } from "@/lib/discord";

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
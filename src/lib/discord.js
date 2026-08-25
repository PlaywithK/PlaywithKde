const API = "https://discord.com/api/v10";

const FORUM_CHANNEL_ID = process.env.DISCORD_FORUM_CHANNEL_ID;
const GUILD_ID = process.env.DISCORD_GUILD_ID;
const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

const headers = {
    Authorization: `Bot ${BOT_TOKEN}`,
};

async function getAvailableTags() {
    const res = await fetch(
        `${API}/channels/${FORUM_CHANNEL_ID}`,
        { headers }
    );

    if (!res.ok) {
        throw new Error(`Discord API error: ${res.status}`);
    }

    const channel = await res.json();

    return channel.available_tags ?? [];
}

async function getActiveThreads() {
    const res = await fetch(
        `${API}/guilds/${GUILD_ID}/threads/active`,
        { headers }
    );

    if (!res.ok) {
        throw new Error(`Discord API error: ${res.status}`);
    }

    const data = await res.json();

    return (data.threads ?? []).filter(
        (thread) => thread.parent_id === FORUM_CHANNEL_ID
    );
}

async function getArchivedThreads() {
    const res = await fetch(
        `${API}/channels/${FORUM_CHANNEL_ID}/threads/archived/public`,
        { headers }
    );

    if (!res.ok) {
        throw new Error(`Discord API error: ${res.status}`);
    }

    const data = await res.json();

    return (data.threads ?? []).filter(
        (thread) => thread.parent_id === FORUM_CHANNEL_ID
    );
}

async function getThreadMessages(threadId) {
    const res = await fetch(
        `${API}/channels/${threadId}/messages?limit=100`,
        { headers }
    );

    if (!res.ok) {
        throw new Error(`Discord API error: ${res.status}`);
    }

    return res.json();
}

function formatMessage(message) {
    return {
        id: message.id,
        content: message.content ?? "",
        authorId: message.author?.id ?? "",
        authorName:
            message.author?.global_name ??
            message.author?.username ??
            "",
        createdAt: message.timestamp ?? "",
    };
}

export async function getForumPosts() {
    const [tags, active, archived] = await Promise.all([
        getAvailableTags(),
        getActiveThreads(),
        getArchivedThreads(),
    ]);

    const allThreads = [...active, ...archived];

    const posts = await Promise.all(
        allThreads.map(async (thread) => {
            const messages = await getThreadMessages(thread.id);

            // Discord liefert Nachrichten normalerweise neueste zuerst.
            const orderedMessages = [...messages].reverse();

            const starterMessage = orderedMessages[0] ?? null;

            return {
                id: thread.id,
                title: thread.name,
                tags: thread.applied_tags ?? [],

                content: starterMessage?.content ?? "",

                authorId: starterMessage?.author?.id ?? "",
                authorName:
                    starterMessage?.author?.global_name ??
                    starterMessage?.author?.username ??
                    "",

                createdAt:
                    thread.thread_metadata?.create_timestamp ?? "",

                archived:
                    thread.thread_metadata?.archived ?? false,
            };
        })
    );

    return {
        posts,
        tags,
    };
}

export async function getForumPost(threadId) {
    const [threadRes, tags, messages] = await Promise.all([
        fetch(`${API}/channels/${threadId}`, { headers }),
        getAvailableTags(),
        getThreadMessages(threadId),
    ]);

    if (!threadRes.ok) {
        if (threadRes.status === 404) {
            return null;
        }

        throw new Error(
            `Discord API error: ${threadRes.status}`
        );
    }

    const thread = await threadRes.json();

    const orderedMessages = [...messages].reverse();

    return {
        post: {
            id: thread.id,
            title: thread.name,
            tags: thread.applied_tags ?? [],

            content:
                orderedMessages[0]?.content ?? "",

            authorId:
                orderedMessages[0]?.author?.id ?? "",

            authorName:
                orderedMessages[0]?.author?.global_name ??
                orderedMessages[0]?.author?.username ??
                "",

            createdAt:
                thread.thread_metadata?.create_timestamp ?? "",

            archived:
                thread.thread_metadata?.archived ?? false,

            messages: orderedMessages.map(formatMessage),
        },

        tags,
    };
}
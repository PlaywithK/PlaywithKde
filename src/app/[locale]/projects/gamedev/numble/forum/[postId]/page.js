"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";
import { Section } from "@/components/design";
import Link from "next/link";
import {usePageBasics} from "@/components/pageBasics";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ForumPostPage() {
    const { locale, postId } = useParams();
    const { t } = usePageBasics("forum");

    const [post, setPost] = useState(null);
    const [tags, setTags] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!postId) return;

        fetch(`/api/forum/${postId}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Beitrag konnte nicht geladen werden");
                }

                return res.json();
            })
            .then((data) => {
                setPost(data.post);

                setTags(
                    Object.fromEntries(
                        (data.tags ?? []).map((tag) => [
                            tag.id,
                            tag.name,
                        ])
                    )
                );
            })
            .catch((err) => {
                console.error(err);
                setPost(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [postId]);

    if (loading) {
        return (
            <>
                <Hero
                    title="Forum"
                    subtitle="Beitrag wird geladen..."
                />

                <Section>
                    <p className="text-gray-500 text-sm">
                        Beitrag wird geladen...
                    </p>
                </Section>
            </>
        );
    }

    if (!post) {
        return (
            <>
                <Hero
                    title="Beitrag nicht gefunden"
                    subtitle="Dieser Forum-Beitrag konnte nicht geladen werden."
                />

                <Section>
                    <Link
                        href={`/${locale}/projects/gamedev/numble/forum`}
                        className="text-sm text-teal-300 hover:text-teal-200"
                    >
                        ← Zurück zum Forum
                    </Link>
                </Section>
            </>
        );
    }

    return (
        <>
            <Hero
                title={post.title}
                subtitle="Forum"
            />

            <Section>
                <div className="max-w-4xl mx-auto">

                    <Link
                        href={`/${locale}/projects/gamedev/numble/forum`}
                        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-teal-300 transition-colors mb-6"
                    >
                        ← Zurück zum Forum
                    </Link>

                    <article className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">

                        <div className="px-6 py-5 border-b border-white/10">

                            <div className="flex flex-wrap gap-2 mb-3">
                                {post.tags.map((id) => (
                                    <span
                                        key={id}
                                        className="text-xs px-2.5 py-1 rounded-md bg-teal-400/10 border border-teal-400/20 text-teal-300"
                                    >
                                        {tags[id] ?? id}
                                    </span>
                                ))}
                            </div>

                            <h1 className="text-xl sm:text-2xl font-semibold text-white">
                                {post.title}
                            </h1>

                            <div className="mt-2 text-xs text-gray-500">
                                {post.createdAt
                                    ? new Date(
                                        post.createdAt
                                    ).toLocaleDateString(
                                        "de-DE",
                                        {
                                            day: "2-digit",
                                            month: "2-digit",
                                            year: "numeric",
                                        }
                                    )
                                    : ""}
                            </div>
                        </div>

                        <div className="px-6 py-7">
                            {post.content ? (
                                <div className="text-sm sm:text-base text-gray-300 whitespace-pre-wrap leading-7">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {post.content}
                                    </ReactMarkdown>
                                </div>
                            ) : (
                                <p className="text-sm text-gray-600 italic">
                                    Dieser Beitrag enthält keinen Text.
                                </p>
                            )}
                        </div>

                    </article>
                </div>
            </Section>

            <LastEdited date="16.08.2026" />
        </>
    );
}
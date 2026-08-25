"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";
import { usePageBasics } from "@/components/pageBasics";
import { Section } from "@/components/design";
import Link from "next/link";

export default function ForumPage() {
    const { t } = usePageBasics("forum");
    const { locale } = useParams();

    const [posts, setPosts] = useState(null);
    const [tags, setTags] = useState({});
    const [activeTag, setActiveTag] = useState(null);

    useEffect(() => {
        fetch("/api/forum")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data.posts ?? []);

                setTags(
                    Object.fromEntries(
                        (data.tags ?? []).map((tag) => [tag.id, tag.name])
                    )
                );
            })
            .catch(() => {
                setPosts([]);
            });
    }, []);

    const filtered = activeTag
        ? posts?.filter((post) => post.tags.includes(activeTag))
        : posts;

    return (
        <>
            <Hero title={t("title")} subtitle={t("desc")} />

            <Section>
                {/* Forum toolbar */}
                <div className="mb-6 border border-white/10 bg-white/[0.02] rounded-xl overflow-hidden">
                    <div className="px-4 py-3 border-b border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div>
                            <h2 className="text-sm font-semibold text-white">
                                Numble-Reports
                            </h2>
                            <p className="text-xs text-gray-500 mt-0.5">
                                {posts?.length ?? 0} Themen
                            </p>
                        </div>

                        {Object.keys(tags).length > 0 && (
                            <div className="flex flex-wrap gap-1.5">
                                <button
                                    onClick={() => setActiveTag(null)}
                                    className={`text-xs px-3 py-1.5 rounded-md border transition-all ${
                                        activeTag === null
                                            ? "bg-teal-400/15 border-teal-400/40 text-teal-300"
                                            : "bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                                    }`}
                                >
                                    {t("allTags")}
                                </button>

                                {Object.entries(tags).map(([id, name]) => (
                                    <button
                                        key={id}
                                        onClick={() => setActiveTag(id)}
                                        className={`text-xs px-3 py-1.5 rounded-md border transition-all ${
                                            activeTag === id
                                                ? "bg-teal-400/15 border-teal-400/40 text-teal-300"
                                                : "bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                                        }`}
                                    >
                                        {name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Loading */}
                {!posts ? (
                    <div className="border border-white/10 rounded-xl bg-white/[0.02] p-8 text-center">
                        <p className="text-gray-500 text-sm">
                            {t("loading")}
                        </p>
                    </div>
                ) : filtered.length === 0 ? (
                    <div className="border border-white/10 rounded-xl bg-white/[0.02] p-8 text-center">
                        <p className="text-gray-500 text-sm">
                            {t("empty")}
                        </p>
                    </div>
                ) : (
                    <div className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.015]">
                        {filtered.map((post, index) => (
                            <Link
                                key={post.id}
                                href={`/${locale}/projects/gamedev/numble/forum/${post.id}`}
                                className={`group block px-4 sm:px-5 py-4 transition-colors hover:bg-white/[0.04] ${
                                    index !== filtered.length - 1
                                        ? "border-b border-white/[0.07]"
                                        : ""
                                }`}
                            >
                                <div className="flex gap-4">
                                    {/* Thread indicator */}
                                    <div className="hidden sm:flex w-12 shrink-0 items-center justify-center">
                                        <div className="w-9 h-9 rounded-lg bg-teal-400/10 border border-teal-400/20 flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 text-teal-300"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                            >
                                                <path
                                                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Main content */}
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-start justify-between gap-4">
                                            <h3 className="text-sm sm:text-base font-medium text-gray-200 group-hover:text-teal-300 transition-colors truncate">
                                                {post.title}
                                            </h3>

                                            <span className="hidden sm:block shrink-0 text-xs text-gray-600">
                                                {post.createdAt
                                                    ? new Date(
                                                        post.createdAt
                                                    ).toLocaleDateString(
                                                        "de-DE"
                                                    )
                                                    : ""}
                                            </span>
                                        </div>

                                        {post.content && (
                                            <p className="mt-1 text-xs sm:text-sm text-gray-500 line-clamp-2 max-w-3xl">
                                                {post.content}
                                            </p>
                                        )}

                                        <div className="mt-3 flex flex-wrap items-center gap-2">
                                            {post.tags.map((id) => (
                                                <span
                                                    key={id}
                                                    className="text-[11px] px-2 py-0.5 rounded bg-teal-400/10 border border-teal-400/15 text-teal-300/80"
                                                >
                                                    {tags[id] ?? id}
                                                </span>
                                            ))}

                                            <span className="text-[11px] text-gray-600">
                                                •
                                            </span>

                                            <span className="text-[11px] text-gray-600">
                                                Discord
                                            </span>
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="hidden sm:flex items-center text-gray-700 group-hover:text-teal-400 transition-colors">
                                        <svg
                                            className="w-4 h-4"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                d="m9 18 6-6-6-6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </Section>

            <LastEdited date="16.08.2026" />
        </>
    );
}
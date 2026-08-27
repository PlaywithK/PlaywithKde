"use client";

import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {FaDiscord} from "react-icons/fa";
import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";
import {usePageBasics} from "@/components/pageBasics";
import {Section} from "@/components/design";
import Link from "next/link";

function HeroSection({t}) {
    return <Hero title={t("title")} subtitle={t("desc")}/>;
}

function TagFilterBar({tags, activeTag, setActiveTag, t}) {
    if (Object.keys(tags).length === 0) return null;

    return (
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
    );
}

function ForumHeader({posts, tags, activeTag, setActiveTag, showForm, setShowForm, t}) {
    return (
        <div
            className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-baseline gap-2">
                <h2 className="text-sm font-semibold text-white">
                    {t("reportsHeading")}
                </h2>
                <span className="text-xs text-gray-500">
                    {posts?.length ?? 0} {t("topicsCount")}
                </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
                <TagFilterBar tags={tags} activeTag={activeTag} setActiveTag={setActiveTag} t={t}/>

                <button
                    onClick={() => setShowForm((v) => !v)}
                    className="text-sm font-medium px-4 py-2 rounded-md bg-teal-400 text-black hover:bg-teal-300 transition-all shadow-lg shadow-teal-400/20 flex items-center gap-1.5"
                >
                    <svg
                        className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                            showForm ? "rotate-45" : "rotate-0"
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                    >
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {showForm ? t("cancelButton") : t("createPostButton")}
                </button>
            </div>
        </div>
    );
}

function NewPostForm({
                         showForm,
                         creatableTags,
                         newPost,
                         setNewPost,
                         selectedTags,
                         setSelectedTags,
                         formError,
                         submitting,
                         handleSubmit,
                         t,
                     }) {
    return (
        <div
            className={`grid transition-all duration-300 ease-in-out ${
                showForm ? "grid-rows-[1fr] opacity-100 mb-6" : "grid-rows-[0fr] opacity-0 mb-0"
            }`}
        >
            <div className="overflow-hidden">
                <div className="border border-teal-400/20 bg-white/[0.02] rounded-xl overflow-hidden">
                    <div className="px-4 sm:px-5 py-3 border-b border-white/10 flex items-center gap-2">
                        <svg
                            className="w-4 h-4 text-teal-300"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                        >
                            <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <h2 className="text-sm font-semibold text-white">
                            {t("newTopicHeading")}
                        </h2>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="px-4 sm:px-5 py-4 flex flex-col gap-3"
                    >
                        <div>
                            <input
                                type="text"
                                placeholder={t("titlePlaceholder")}
                                value={newPost.title}
                                maxLength={100}
                                onChange={(e) =>
                                    setNewPost((p) => ({...p, title: e.target.value}))
                                }
                                className="w-full bg-white/[0.03] border border-white/10 rounded-md px-3 py-2 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-teal-400/40"
                            />
                        </div>

                        <div>
                            <textarea
                                placeholder={t("contentPlaceholder")}
                                value={newPost.content}
                                rows={4}
                                onChange={(e) =>
                                    setNewPost((p) => ({...p, content: e.target.value}))
                                }
                                className="w-full bg-white/[0.03] border border-white/10 rounded-md px-3 py-2 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-teal-400/40 resize-none"
                            />
                        </div>

                        {Object.keys(creatableTags).length > 0 && (
                            <div>
                                <p className="text-xs text-gray-500 mb-1.5">{t("selectTagLabel")}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {Object.entries(creatableTags).map(([id, name]) => (
                                        <button
                                            key={id}
                                            type="button"
                                            onClick={() =>
                                                setSelectedTags((prev) =>
                                                    prev.includes(id)
                                                        ? prev.filter((t) => t !== id)
                                                        : [...prev, id]
                                                )
                                            }
                                            className={`text-xs px-3 py-1.5 rounded-md border transition-all ${
                                                selectedTags.includes(id)
                                                    ? "bg-teal-400/15 border-teal-400/40 text-teal-300"
                                                    : "bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                                            }`}
                                        >
                                            {name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {formError && <p className="text-xs text-red-400">{formError}</p>}

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={submitting}
                                className="text-xs px-4 py-2 rounded-md border border-teal-400/40 bg-teal-400/15 text-teal-300 hover:bg-teal-400/25 transition-all disabled:opacity-50"
                            >
                                {submitting ? t("submittingButton") : t("submitButton")}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

function PostListItem({post, index, isLast, tags, locale, t}) {
    return (
        <Link
            href={`/${locale}/projects/gamedev/numble/forum/${post.id}`}
            className={`group block px-4 sm:px-5 py-4 transition-colors hover:bg-white/[0.04] ${
                !isLast ? "border-b border-white/[0.07]" : ""
            }`}
        >
            <div className="flex gap-4">
                <div className="hidden sm:flex w-12 shrink-0 flex-col items-center gap-1">
                    <div
                        className="w-9 h-9 rounded-lg bg-teal-400/10 border border-teal-400/20 flex items-center justify-center">
                        <svg
                            className="w-4 h-4 text-teal-300"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                        >
                            <path
                                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/>
                        </svg>
                    </div>
                    <span className="text-[10px] text-gray-700 font-mono">
                        #{index + 1}
                    </span>
                </div>

                <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-4">
                        <h3 className="text-sm sm:text-base font-medium text-gray-200 group-hover:text-teal-300 transition-colors truncate">
                            {post.title}
                        </h3>

                        <span className="hidden sm:block shrink-0 text-xs text-gray-600">
                            {post.createdAt
                                ? new Date(post.createdAt).toLocaleDateString(locale === "en" ? "en-US" : "de-DE")
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

                        <span className="text-[11px] text-gray-600">•</span>
                        <span className="text-[11px] text-gray-600">{t("sourceLabel")}</span>
                    </div>
                </div>

                <div className="hidden sm:flex items-center text-gray-700 group-hover:text-teal-400 transition-colors">
                    <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </Link>
    );
}

function PostList({posts, filtered, tags, locale, t}) {
    if (!posts) {
        return (
            <div className="border border-white/10 rounded-xl bg-white/[0.02] p-8 text-center">
                <p className="text-gray-500 text-sm">{t("loading")}</p>
            </div>
        );
    }

    if (filtered.length === 0) {
        return (
            <div className="border border-white/10 rounded-xl bg-white/[0.02] p-8 text-center">
                <p className="text-gray-500 text-sm">{t("empty")}</p>
            </div>
        );
    }

    return (
        <div className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.015]">
            {filtered.map((post, index) => (
                <PostListItem
                    key={post.id}
                    post={post}
                    index={index}
                    isLast={index === filtered.length - 1}
                    tags={tags}
                    locale={locale}
                    t={t}
                />
            ))}
        </div>
    );
}

function ForumSection({t, locale}) {
    const [posts, setPosts] = useState(null);
    const [tags, setTags] = useState({});
    const [creatableTags, setCreatableTags] = useState({});
    const [activeTag, setActiveTag] = useState(null);

    const [showForm, setShowForm] = useState(false);
    const [newPost, setNewPost] = useState({title: "", content: ""});
    const [selectedTags, setSelectedTags] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [formError, setFormError] = useState(null);

    function loadPosts() {
        fetch("/api/forum")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data.posts ?? []);

                const allTags = data.tags ?? [];

                setTags(
                    Object.fromEntries(allTags.map((tag) => [tag.id, tag.name]))
                );

                setCreatableTags(
                    Object.fromEntries(
                        allTags
                            .filter((tag) => !tag.adminOnly)
                            .map((tag) => [tag.id, tag.name])
                    )
                );
            })
            .catch(() => {
                setPosts([]);
            });
    }

    useEffect(() => {
        loadPosts();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        setFormError(null);

        if (!newPost.title.trim() || !newPost.content.trim()) {
            setFormError(t("errorTitleContent"));
            return;
        }

        if (selectedTags.length === 0) {
            setFormError(t("errorTag"));
            return;
        }

        setSubmitting(true);

        try {
            const res = await fetch("/api/forum", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({...newPost, tags: selectedTags}),
            });

            const data = await res.json();

            if (!res.ok) {
                setFormError(data.error ?? t("errorSubmit"));
                return;
            }

            setNewPost({title: "", content: ""});
            setSelectedTags([]);
            setShowForm(false);

            setPosts(null);
            loadPosts();
        } catch (err) {
            setFormError(t("errorNetwork"));
        } finally {
            setSubmitting(false);
        }
    }

    const filtered = activeTag
        ? posts?.filter((post) => post.tags.includes(activeTag))
        : posts;

    return (
        <Section>
            <ForumHeader
                posts={posts}
                tags={tags}
                activeTag={activeTag}
                setActiveTag={setActiveTag}
                showForm={showForm}
                setShowForm={setShowForm}
                t={t}
            />

            <NewPostForm
                showForm={showForm}
                creatableTags={creatableTags}
                newPost={newPost}
                setNewPost={setNewPost}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
                formError={formError}
                submitting={submitting}
                handleSubmit={handleSubmit}
                t={t}
            />

            <PostList posts={posts} filtered={filtered} tags={tags} locale={locale} t={t}/>
        </Section>
    );
}

function DiscordSection({t}) {
    return (
        <Section>
            <div className="flex flex-col items-center gap-3 text-center">
                <a
                    href="https://discord.gg/FgXCkqp6zM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] transition-colors duration-300 px-4 py-2 rounded-full text-white font-medium"
                >
                    <FaDiscord size={20}/>
                    {t("discordButton")}
                </a>
            </div>
        </Section>
    );
}

export default function ForumPage() {
    const {t} = usePageBasics("forum");
    const {locale} = useParams();

    return (
        <>
            <HeroSection t={t}/>
            <ForumSection t={t} locale={locale}/>
            <DiscordSection t={t}/>
            <LastEdited date="27.08.2026"/>
        </>
    );
}
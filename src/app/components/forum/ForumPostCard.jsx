"use client";

import {H3, P} from "@/components/design";

function TagPill({label}) {
    return (
        <span className="text-xs rounded-full bg-teal-400/10 text-teal-300 border border-teal-400/20 px-2.5 py-1">
      {label}
    </span>
    );
}

export default function ForumPostCard({title, content, tags, createdAt, href}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between rounded-3xl p-7 min-h-[220px]
    bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent
    border border-white/10 overflow-hidden transition-all duration-300
    hover:border-teal-400/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-teal-400/10"
        >
            <div
                className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-20
    group-hover:opacity-45 group-hover:scale-110 transition-all duration-500
    bg-gradient-to-br from-teal-400 to-transparent"
            />

            <div className="relative">
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                        {tags.map((tag) => (
                            <TagPill key={tag} label={tag}/>
                        ))}
                    </div>
                )}
                <H3 className="mb-2">{title}</H3>
                <P className="text-sm text-gray-400 leading-relaxed line-clamp-3">{content}</P>
            </div>

            <div className="relative mt-5 text-xs text-gray-500">
                {new Date(createdAt).toLocaleDateString("de-DE", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                })}
            </div>
        </a>
    );
}
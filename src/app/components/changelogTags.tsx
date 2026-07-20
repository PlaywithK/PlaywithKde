// components/changelogTag.tsx
import React from "react";

export type ChangelogTagType =
    | "new"
    | "improved"
    | "fix"
    | "removed"
    | "security"
    | "breaking";

const tagStyles: Record<ChangelogTagType, string> = {
    new: "bg-teal-500/15 text-teal-300 border-teal-400/40",
    improved: "bg-purple-500/15 text-purple-300 border-purple-400/40",
    fix: "bg-amber-500/15 text-amber-300 border-amber-400/40",
    removed: "bg-red-500/15 text-red-300 border-red-400/40",
    security: "bg-yellow-500/15 text-yellow-300 border-yellow-400/40",
    breaking: "bg-pink-500/15 text-pink-300 border-pink-400/40",
};

const tagLabels: Record<ChangelogTagType, string> = {
    new: "New",
    improved: "Improved",
    fix: "Fix",
    removed: "Removed",
    security: "Security",
    breaking: "Breaking",
};

export function ChangelogTag({type}: { type: ChangelogTagType }) {
    return (
        <span
            className={
                "inline-block text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border " +
                tagStyles[type]
            }
        >
            {tagLabels[type]}
        </span>
    );
}
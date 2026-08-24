"use client";

import { useState } from "react";

import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";
import { usePageBasics } from "@/components/pageBasics";
import { Section } from "@/components/design";

import PatchNoteCard from "@/components/patchnotes/PatchNoteCard";
import patchNotes from "@/components/patchnotes/numblepatchnotes";

export default function PatchNotesPage() {
    const { t } = usePageBasics("patchnotes");

    const latestPatch = patchNotes[0];
    const previousPatches = patchNotes.slice(1);

    const [openVersions, setOpenVersions] = useState(
        new Set()
    );

    function toggleVersion(version) {
        setOpenVersions((current) => {
            const next = new Set(current);

            if (next.has(version)) {
                next.delete(version);
            } else {
                next.add(version);
            }

            return next;
        });
    }

    return (
        <>
            <Hero
                title={t("title")}
                subtitle={t("desc")}
            />

            <Section>
                <div className="max-w-4xl mx-auto">

                    {/* Latest */}
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs uppercase tracking-widest text-teal-300">
                                Latest Update
                            </span>

                            <div className="h-px flex-1 bg-white/10" />
                        </div>

                        <PatchNoteCard
                            patch={latestPatch}
                            latest
                        />
                    </div>

                    {/* Previous */}
                    {previousPatches.length > 0 && (
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-xs uppercase tracking-widest text-gray-500">
                                    Previous Updates
                                </span>

                                <div className="h-px flex-1 bg-white/10" />
                            </div>

                            <div className="space-y-3">
                                {previousPatches.map((patch) => {
                                    const open =
                                        openVersions.has(
                                            patch.version
                                        );

                                    return (
                                        <div
                                            key={patch.version}
                                            className="border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden"
                                        >
                                            <button
                                                onClick={() =>
                                                    toggleVersion(
                                                        patch.version
                                                    )
                                                }
                                                className="w-full px-5 py-4 flex items-center gap-4 text-left hover:bg-white/[0.03] transition-colors"
                                            >
                                                <div className="w-9 h-9 shrink-0 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-xs text-gray-400">
                                                    {open
                                                        ? "−"
                                                        : "+"}
                                                </div>

                                                <div className="min-w-0 flex-1">
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-sm font-medium text-gray-200">
                                                            v
                                                            {
                                                                patch.version
                                                            }
                                                        </span>

                                                        <span className="text-sm text-gray-500 truncate">
                                                            {
                                                                patch.title
                                                            }
                                                        </span>
                                                    </div>

                                                    <div className="mt-1 text-xs text-gray-600">
                                                        {
                                                            patch.date
                                                        }
                                                    </div>
                                                </div>
                                            </button>

                                            {open && (
                                                <div className="border-t border-white/10">
                                                    <PatchNoteCard
                                                        patch={
                                                            patch
                                                        }
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </Section>

            <LastEdited date="16.08.2026" />
        </>
    );
}
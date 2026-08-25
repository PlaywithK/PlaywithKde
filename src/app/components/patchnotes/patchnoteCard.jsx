import PatchChangeSection from "./patchChangeSection";

export default function PatchNoteCard({patch, latest = false}) {
    return (
        <div
            className={
                latest
                    ? "relative overflow-hidden rounded-2xl border border-teal-400/20 bg-gradient-to-br from-teal-400/[0.08] via-white/[0.03] to-transparent"
                    : "border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden"
            }
        >
            <div className="relative p-6 sm:p-8">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="text-2xl sm:text-3xl font-semibold text-white">
                                v{patch.version}
                            </span>

                            {latest && (
                                <span className="px-2 py-1 rounded-md bg-teal-400/15 border border-teal-400/20 text-[10px] uppercase tracking-wider text-teal-300">
                                    Latest
                                </span>
                            )}
                        </div>

                        <h2 className="mt-2 text-lg font-medium text-gray-200">
                            {patch.title}
                        </h2>

                        <p className="mt-2 text-sm text-gray-500 max-w-2xl">
                            {patch.description}
                        </p>
                    </div>

                    <time className="text-xs text-gray-600 shrink-0">
                        {patch.date}
                    </time>
                </div>

                {/* Changes */}
                <div className="mt-7 space-y-7">
                    {Object.entries(patch.changes).map(
                        ([type, changes]) => (
                            <PatchChangeSection
                                key={type}
                                type={type}
                                changes={changes}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
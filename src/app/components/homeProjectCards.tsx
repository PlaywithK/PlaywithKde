export interface ProjectCard {
    key: "webgames" | "apps" | "gamedev" | "minecraft";
    link: string;
    iconPath: string;
}

export const projectCards: ProjectCard[] = [
    {
        key: "webgames",
        link: "projects/webgames",
        iconPath: "M4 6a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM4 8h16M8 4v4",
    },
    {
        key: "apps",
        link: "projects/apps",
        iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    },
    {
        key: "gamedev",
        link: "projects/gamedev",
        iconPath: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
    },
    {
        key: "minecraft",
        link: "projects/minecraft",
        iconPath: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z",
    },
];

interface IconBadgeProps {
    path: string;
}

export function IconBadge({path}: IconBadgeProps) {
    return (
        <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-teal-900/50 flex items-center justify-center">
            <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d={path}/>
            </svg>
        </div>
    );
}
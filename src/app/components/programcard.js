import {H3, P} from "@/components/design";

export default function ProgramCard({name, logo, description, link}) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col gap-3 transition-all duration-300 hover:border-teal-400/50 hover:bg-white/[0.07] hover:-translate-y-1">
            <div
                className="flex items-center gap-3">
                <div
                    className="w-10 h-10 flex-shrink-0 rounded-lg bg-white/10 p-1.5 flex items-center justify-center">
                    <img
                        src={logo}
                        alt={name}
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
                <H3 className="!mb-0">{name}</H3>
            </div>
            <P className="text-sm leading-relaxed">{description}</P>
            <div
                className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-teal-400 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-b-xl"/>
        </a>
    );
}
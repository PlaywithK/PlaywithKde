import changeTypes from "./changeTypes";

export default function PatchChangeSection({type, changes}) {
    const style = changeTypes[type];

    if (!changes || changes.length === 0 || !style) {
        return null;
    }

    return (
        <div>
            <div className="flex items-center gap-2 mb-3">
                <span
                    className={`flex items-center justify-center w-6 h-6 rounded-md border ${style.bg} ${style.border} ${style.color}`}
                >
                    {style.icon}
                </span>

                <h3
                    className={`text-sm font-medium ${style.color}`}
                >
                    {style.label}
                </h3>
            </div>

            <ul className="space-y-2 ml-8">
                {changes.map((change, index) => (
                    <li
                        key={index}
                        className="relative pl-4 text-sm text-gray-400 leading-6"
                    >
                        <span className="absolute left-0 top-[11px] w-1 h-1 rounded-full bg-gray-600"/>

                        {change}
                    </li>
                ))}
            </ul>
        </div>
    );
}
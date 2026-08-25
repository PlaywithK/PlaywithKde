const changeTypes = {
    added: {
        label: "New",
        icon: "+",
        color: "text-teal-300",
        bg: "bg-teal-400/10",
        border: "border-teal-400/20",
    },

    improved: {
        label: "Improvements",
        icon: "↑",
        color: "text-sky-300",
        bg: "bg-sky-400/10",
        border: "border-sky-400/20",
    },

    fixed: {
        label: "Fixes",
        icon: "✓",
        color: "text-emerald-300",
        bg: "bg-emerald-400/10",
        border: "border-emerald-400/20",
    },

    removed: {
        label: "Removed",
        icon: "−",
        color: "text-red-300",
        bg: "bg-red-400/10",
        border: "border-red-400/20",
    },
};

export default changeTypes;
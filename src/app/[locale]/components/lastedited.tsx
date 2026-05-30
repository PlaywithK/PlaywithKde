export default function LastEdited({
    date,
}: {
    date: string;
}) {
    const formatted = new Date(date).toLocaleDateString(
        "de-DE",
        {
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    );

    return (
        <div className="mt-12 pt-6 border-t border-gray-800 text-sm text-gray-500">
            Last edited: {formatted}
        </div>
    );
}
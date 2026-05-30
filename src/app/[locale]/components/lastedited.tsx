export default function LastEdited({
    date,
}: {
    date: string;
}) {
    return (
        <div className="mt-12 pt-6 border-t border-gray-800 text-sm text-gray-500">
            Last edited:{" "}
            {new Date(date).toLocaleDateString("de-DE")}
        </div>
    );
}
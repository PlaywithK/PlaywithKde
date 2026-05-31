export default function Hero({
    title,
    subtitle,
}: {
    title: string;
    subtitle?: string;
}) {
    return (
        <section className="max-w-6xl mx-auto text-center pt-24 pb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight bg-gradient-to-b from-teal-400 from-40% to-teal-800 text-transparent bg-clip-text">
                {title}
            </h1>
            {subtitle && (
                <p className="text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
            )}
        </section>
    );
}

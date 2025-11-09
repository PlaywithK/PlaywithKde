export default function Hero({
    title,
    subtitle,
}: {
    title: string;
    subtitle?: string;
}) {
    return (
        <section className="max-w-6xl mx-auto text-center pt-24 pb-16 sm:pt-20 sm:pb-20">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-400">
                {title}
            </h1>
            {subtitle && (
                <p className="text-gray-300 max-w-2xl mx-auto mb-12">{subtitle}</p>
            )}
        </section>
    );
}

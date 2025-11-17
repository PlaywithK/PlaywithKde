"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./lightbox";

export default function Gallery({
    title = "Galerie",
    description = "",
    images = [],
}) {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = (i) => setLightboxIndex(i);
    const closeLightbox = () => setLightboxIndex(null);
    const prev = () => setLightboxIndex((i) => (i > 0 ? i - 1 : images.length - 1));
    const next = () => setLightboxIndex((i) => (i < images.length - 1 ? i + 1 : 0));

    return (
        <section>
            {/* Titel */}
            <h2 className="text-3xl font-semibold mb-4 text-teal-400">
                {title}
            </h2>

            {/* Beschreibung */}
            {description && (
                <p className="mb-8 max-w-prose">{description}</p>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map(({ src, alt, caption }, i) => (
                    <div
                        key={i}
                        className="overflow-hidden rounded-xl shadow-lg border border-white/10 cursor-pointer group"
                        onClick={() => openLightbox(i)}
                    >
                        <div className="relative w-full h-64 sm:h-72 md:h-80">
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                            />
                        </div>

                        <div className="bg-gray-700 p-3 text-sm text-gray-300">
                            {caption}
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            <Lightbox
                images={images}
                index={lightboxIndex}
                onClose={closeLightbox}
                onPrev={prev}
                onNext={next}
            />
        </section>
    );
}

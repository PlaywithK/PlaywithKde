"use client";

import React from "react";
import Image from "next/image";

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
    if (index === null) return null;

    return (
        <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center">

            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white text-3xl"
            >
                ✕
            </button>

            {/* Prev */}
            <button
                onClick={onPrev}
                className="absolute left-6 text-white text-4xl px-4"
            >
                ‹
            </button>

            {/* Fullscreen image */}
            <div className="relative w-[90vw] h-[80vh]">
                <Image
                    src={images[index].src}
                    alt={images[index].alt}
                    fill
                    className="object-contain"
                />
            </div>

            {/* Next */}
            <button
                onClick={onNext}
                className="absolute right-6 text-white text-4xl px-4"
            >
                ›
            </button>
        </div>
    );
}

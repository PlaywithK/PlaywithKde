"use client";


import Gallery from "@/components/gallery";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Hero from "@/components/hero";
import { H1, H2, H3, P, PLarge } from "@/components/design";
import ServerStatusCard from "@/components/serverstatus";
import { updates, galleryImages } from "@/components/winterprojekt/winterprojekt25Data";
import LastEdited from "@/components/lastedited";

export default function Winterprojekt2026() {

    return (
        <>
                {/* Projektbeschreibung */}

            {/* Timer bis Projektstart */}

            {/* Regeln */}

            {/* Admin/Owner */}

            {/* Wiki */}

                <hr className="border-t border-gray-700 my-12" />

                {/* Gallery */}
                <Gallery
                    title="Community Galerie"
                    description="In der Community-Galerie findest du Bilder und Clips aus der Community! Du hast auch einen Moment der es verdient hat hier zu landen? Schicke ihn PlaywithK auf Discord!"
                    images={galleryImages}
                />

            <LastEdited date="17.10.2026" />
        </>
    );
}
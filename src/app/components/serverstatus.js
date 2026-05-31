"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function ServerStatusCard() {
    const [status, setStatus] = useState({ online: false, players: { online: 0, max: 0 } });
    const serverIP = "pwk.mineceater.de";
    const apiUrl = `https://api.mcsrvstat.us/3/${serverIP}`;

    useEffect(() => {
        async function fetchStatus() {
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setStatus(data);
            } catch (err) {
                console.error("Fehler beim Abrufen des Serverstatus:", err);
                setStatus({ online: false, players: { online: 0, max: 0 } });
            }
        }

        fetchStatus();
        const interval = setInterval(fetchStatus, 15000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gray-800/70 border border-white/10 rounded-2xl shadow-xl p-4 sm:p-6 flex items-center gap-4 max-w-lg mx-auto mt-10">
            {/* Serverlogo */}
            <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                    src="/minecraft/winterprojekt/2025/wp_25_placeholderIcon.png"
                    alt="Minecraft Server"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Server-Infos */}
            <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-teal-400">Winterprojekt 2025</h2>
                <p className="text-gray-300 mt-1">
                    {status.online
                        ? `${status.players.online} / ${status.players.max} Spieler online`
                        : "Server offline"}
                </p>
            </div>

            {/* Status-Kreis */}
            <div
                className={`w-6 h-6 rounded-full border-2 ${
                    status.online ? "bg-green-500 border-green-300 shadow-green-500/40" : "bg-red-500 border-red-300 shadow-red-500/40"
                } shadow-lg`}
                title={status.online ? "Online" : "Offline"}
            ></div>
        </div>
    );
}
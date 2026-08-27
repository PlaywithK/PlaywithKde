"use client";

import {useTranslations} from "next-intl";
import {useParams} from "next/navigation";
import {useState} from "react";
import {FaDiscord} from "react-icons/fa";
import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";
import {useDocumentTitle} from "@/components/documentTitle";
import {Section} from "@/components/design";
import {usePageBasics} from "@/components/pageBasics";

export default function Contact() {
    const {t, common, locale} = usePageBasics("contact");

    return (
        <>
            <HeroSection t={t}/>
            <ContactSection t={t}/>
            <LastEdited date="19.07.2026"/>
        </>
    );
}

function HeroSection({t}) {
    return <Hero title={t("title")} subtitle={t("desc")}/>;
}

function ContactMethods({t}) {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-gray-300 mb-6">
            <div className="flex flex-col gap-1">
                <p>
                    {t("email.general")}:{" "}
                    <a href="mailto:info@playwithk.de" className="text-teal-400 hover:underline">
                        info@playwithk.de
                    </a>
                </p>
                <p>
                    {t("email.support")}:{" "}
                    <a href="mailto:support@playwithk.de" className="text-teal-400 hover:underline">
                        support@playwithk.de
                    </a>
                </p>
            </div>

            <a
                href="https://discord.gg/FgXCkqp6zM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] transition-colors duration-300 px-4 py-2 rounded-full text-white font-medium"
            >
                <FaDiscord size={20}/>
                Discord
            </a>
        </div>
    );
}

function ContactForm({t}) {
    const [formData, setFormData] = useState({name: "", email: "", message: ""});
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Send failed");

            setStatus("success");
            setFormData({name: "", email: "", message: ""});
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    return (
        <div className="max-w-3xl w-full mx-auto">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 bg-gray-800 p-8 rounded-lg shadow-lg"
            >
                <label className="flex flex-col text-gray-300">
                    {t("form.name")}
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2 p-3 rounded bg-gray-700 border border-gray-600 focus:border-teal-400 outline-none text-gray-100"
                    />
                </label>
                <label className="flex flex-col text-gray-300">
                    {t("form.mail")}
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2 p-3 rounded bg-gray-700 border border-gray-600 focus:border-teal-400 outline-none text-gray-100"
                    />
                </label>
                <label className="flex flex-col text-gray-300">
                    {t("form.message")}
                    <textarea
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-2 p-3 rounded bg-gray-700 border border-gray-600 focus:border-teal-400 outline-none text-gray-100 resize-none"
                    />
                </label>

                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-teal-500 hover:bg-teal-400 transition-colors duration-300 py-3 rounded font-semibold text-gray-900 disabled:opacity-50"
                >
                    {status === "sending" ? t("form.sending") : t("form.send")}
                </button>

                {status === "success" && (
                    <p className="text-teal-400 text-center">{t("form.success")}</p>
                )}
                {status === "error" && (
                    <p className="text-red-400 text-center">{t("form.error")}</p>
                )}
            </form>
        </div>
    );
}

function ContactSection({t}) {
    return (
        <Section className="!max-w-3xl w-full">
            <ContactMethods t={t}/>
            <ContactForm t={t}/>
        </Section>
    );
}
"use client";

import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";
import {H1, H2, H3, P, PLarge, PSmall, Section} from "@/components/design";
import {usePageBasics} from "@/components/pageBasics";

export default function Imprint() {
    const {t, common, locale} = usePageBasics("imprint");

    return (
        <>
            <HeroSection t={t}/>
            <ProviderSection t={t}/>
            <ContactSection t={t} locale={locale}/>
            <VatSection t={t}/>
            <LiabilitySection t={t}/>
            <UsageRightsSection t={t}/>
            <LastEdited date="20.07.2026"/>
        </>
    );
}

function HeroSection({t}) {
    return <Hero title={t("title")} subtitle={t("desc")}/>;
}

function ProviderSection({t}) {
    return (
        <Section>
            <H3 className="text-2xl font-semibold mb-2 text-teal-400">{t("provider.title")}</H3>
            <P className="text-gray-300 whitespace-pre-line">
                {/* Impressum */}
                {t("provider.name")}
                {"\n"}
                {t("provider.address")}
            </P>
        </Section>
    );
}

function ContactSection({t, locale}) {
    return (
        <Section>
            <H3 className="text-2xl font-semibold mb-2 text-teal-400">{t("contact.title")}</H3>
            <P className="text-gray-300">
                E-Mail:{" "}
                <a href="mailto:info@playwithk.de" className="underline hover:text-teal-400">
                    info@playwithk.de
                </a>
            </P>
            <P className="text-gray-300">
                {t("contact.viaForm")}{" "}
                <a href={`/${locale}/kontakt`} className="underline hover:text-teal-400">
                    {t("contact.formLink")}
                </a>
            </P>
        </Section>
    );
}

function VatSection({t}) {
    return (
        <Section>
            <H3 className="text-2xl font-semibold">{t("vat.title")}</H3>
            <P className="text-gray-300">{t("vat.text")}</P>
        </Section>
    );
}

function LiabilitySection({t}) {
    return (
        <Section className="space-y-4 text-gray-300">
            <H3 className="text-2xl font-semibold">{t("liability.title")}</H3>
            <P>{t("liability.content")}</P>
            <P>{t("liability.links")}</P>
        </Section>
    );
}

function UsageRightsSection({t}) {
    return (
        <Section>
            <H3 className="text-2xl font-semibold">{t("usageRights.title")}</H3>
            <P className="mb-4">{t("usageRights.description")}</P>

            <H2 className="text-2xl font-semibold">{t("sources.title")}</H2>
            <P>
                SVG Icons:{" "}
                <a
                    href="https://www.svgrepo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-teal-400"
                >
                    https://www.svgrepo.com/
                </a>
            </P>
        </Section>
    );
}
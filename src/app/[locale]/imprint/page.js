"use client";

import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";
import {H1, H2, H3, P, PLarge, PSmall, Section} from "@/components/design";
import {usePageBasics} from "@/components/pageBasics";

export default function Imprint() {
    const {t, common, locale} = usePageBasics("imprint");

    return (
        <>
            <Hero title={t("title")} subtitle={t("desc")}/>

            {/* Anbieterkennzeichnung */}
            <Section>
                <H3 className="text-2xl font-semibold mb-2 text-teal-400">{t("provider.title")}</H3>
                <P className="text-gray-300 whitespace-pre-line">
                    {/* Impressum */}
                    {t("provider.name")}
                    {"\n"}
                    {t("provider.address")}
                </P>
            </Section>

                {/* Kontakt */}
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

                {/* Umsatzsteuer */}
            <Section>
                <H3 className="text-2xl font-semibold">{t("vat.title")}</H3>
                <P className="text-gray-300">{t("vat.text")}</P>
            </Section>

                {/* Haftungsausschluss */}
            <Section className="space-y-4 text-gray-300">
                <H3 className="text-2xl font-semibold">{t("liability.title")}</H3>
                <P>{t("liability.content")}</P>
                <P>{t("liability.links")}</P>
            </Section>

                {/* Nutzungsrecht */}
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

            {/* SECRET */}
            <Section>
                <P className="text-center">
                    <a
                        href="/impressumdegato.png"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-teal-400"
                    >
                        CLICK FOR A SECRET
                    </a>
                </P>
            </Section>

            <LastEdited date="20.07.2026"/>
        </>
    );
}
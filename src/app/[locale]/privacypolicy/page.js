"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { H1, H2, H3, P } from "@/components/design";
import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";

export default function PrivacyPolicy() {
  const t = useTranslations("privacypolicy");
  const params = useParams();
  const locale = params.locale;
  useEffect(() => {
    document.title = locale === "de"
      ? "Datenschutz - PlaywithK.de"
      : "Privacy Policy - PlaywithK.de";
  }, [locale]);

  return (
    <>
      <Hero title={t("hero.title")} subtitle={t("hero.subtitle")} />

      <section className="max-w-2xl mx-auto [&_h2]:!mt-10 [&_h2]:!mb-2 [&_h3]:!mt-6 [&_h3]:!mb-2 [&_p]:!mb-6 [&_ul]:!mb-6">
        <P>{t("policy.introduction")}</P>

        {/* 1. Verantwortlicher */}
        <H2>{t("policy.responsible.title")}</H2>
        <P>{t("policy.responsible.paragraph")}</P>

        {/* 2. Welche Daten ich erhebe */}
        <H2>{t("policy.collection.title")}</H2>

        <H3>{t("policy.collection.voluntary.title")}</H3>
        <P>{t("policy.collection.voluntary.paragraph")}</P>
        <ul className="list-disc pl-6">
          {t.raw("policy.collection.voluntary.list").map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <P>{t("policy.collection.voluntary.note")}</P>

        <H3>{t("policy.collection.automatic.title")}</H3>
        <P>{t("policy.collection.automatic.paragraph")}</P>
        <ul className="list-disc pl-6">
          {t.raw("policy.collection.automatic.list").map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <P>{t("policy.collection.automatic.note")}</P>

        <H3>{t("policy.collection.cookies.title")}</H3>
        <P>{t("policy.collection.cookies.paragraph")}</P>

        {/* 3. Rechtsgrundlage */}
        <H2>{t("policy.legalBasis.title")}</H2>
        <P>{t("policy.legalBasis.paragraph")}</P>
        <ul className="list-disc pl-6">
          {t.raw("policy.legalBasis.list").map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* 4. Weitergabe von Daten */}
        <H2>{t("policy.sharing.title")}</H2>
        <P>{t("policy.sharing.paragraph")}</P>
        <ul className="list-disc pl-6">
          {t.raw("policy.sharing.list").map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* 5. Drittplattformen */}
        <H2>{t("policy.thirdPartyPlatforms.title")}</H2>
        <P>{t("policy.thirdPartyPlatforms.paragraph")}</P>
        <ul className="list-disc pl-6">
          <li>
            <a href="https://store.steampowered.com/privacy_agreement/" target="_blank" rel="noopener noreferrer" className="underline hover:text-teal-400">
              {t("policy.thirdPartyPlatforms.steamLink")}
            </a>
          </li>
          <li>
            <a href="https://itch.io/docs/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-teal-400">
              {t("policy.thirdPartyPlatforms.itchLink")}
            </a>
          </li>
        </ul>

        {/* 6. Speicherdauer */}
        <H2>{t("policy.retention.title")}</H2>
        <P>{t("policy.retention.paragraph")}</P>

        {/* 7. Rechte */}
        <H2>{t("policy.rights.title")}</H2>
        <P>{t("policy.rights.paragraph")}</P>
        <ul className="list-disc pl-6">
          {t.raw("policy.rights.list").map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <P>{t("policy.rights.contactNote")}</P>

        {/* 8. Kinder */}
        <H2>{t("policy.children.title")}</H2>
        <P>{t("policy.children.paragraph")}</P>

        {/* 9. Internationale Übermittlung */}
        <H2>{t("policy.internationalTransfers.title")}</H2>
        <P>{t("policy.internationalTransfers.paragraph")}</P>

        {/* 10. Externe Links */}
        <H2>{t("policy.externalLinks.title")}</H2>
        <P>{t("policy.externalLinks.paragraph")}</P>

        {/* 11. Änderungen */}
        <H2>{t("policy.changes.title")}</H2>
        <P>{t("policy.changes.paragraph")}</P>

        {/* 12. Kontakt */}
        <H2>{t("policy.contact.title")}</H2>
        <P>{t("policy.contact.paragraph")}</P>
        <P>{t("policy.contact.email")}</P>

        <H3>{t("policy.lastUpdated")}</H3>
      </section>

      <LastEdited date="14.07.2026" />
    </>
  );
}


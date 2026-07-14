"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { H2, H3, P } from "@/components/design";
import LastEdited from "@/components/lastedited";

const STEAM_URL = "https://store.steampowered.com/app/4926400/Numble/";
const ITCH_URL = "https://playwithk.itch.io/numble";
const PLAYSTORE_URL = "https://play.google.com/store/apps/";

const platforms = [
  { name: "Steam", href: STEAM_URL, logo: "/steam_logo_round.webp" },
  { name: "itch.io", href: ITCH_URL, logo: "/itch_logo_round.webp" },
  { name: "Google Play", href: PLAYSTORE_URL, logo: "/gplay_logo_round.webp" },
];

const BUTTON_MASK = "/numble/NumbleStylesheet_ButtonOhneEcken.png";

function MaskedBox({
  as: Component = "div",
  children,
  maskSrc,
  className = "",
  contentClassName = "",
  style = {},
  ...props
}) {
  return (
    <Component
      className={`relative ${className}`}
      style={{
        WebkitMaskImage: `url(${maskSrc})`,
        maskImage: `url(${maskSrc})`,
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        ...style,
      }}
      {...props}
    >
      <span className={`relative z-10 ${contentClassName}`}>{children}</span>
    </Component>
  );
}

export default function Numble() {
  const t = useTranslations("numble");
  const params = useParams();
  const locale = params.locale;

  useEffect(() => {
    document.title = locale === "de"
      ? "Numble - PlaywithK.de"
      : "Numble - PlaywithK.de";
  }, [locale]);

  const getList = (key) => {
    const value = t.raw(key);
    return Array.isArray(value) ? value : [];
  };

  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen min-h-screen overflow-hidden text-gray-100 isolate">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/numble/Numble_Steam_Background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        <div className="absolute inset-0 bg-[#F8A300]/10" />
      </div>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-24 pb-16">
        <div className="relative w-80 sm:w-[28rem] md:w-[36rem] h-40 sm:h-56 md:h-72 mb-6">
          <Image
            src="/numble/NumbleLogo_Glow.png"
            alt="Numble Logo"
            fill
            priority
            sizes="(max-width: 1000px) 820px, 884px"
            className="object-contain drop-shadow-[0_0_25px_rgba(255,191,0,0.35)]"
          />
        </div>
        <MaskedBox
          maskSrc={BUTTON_MASK}
          className="inline-block bg-[#FFBF00]/20 px-4 py-1"
          contentClassName="text-[#FFBF00] text-sm"
        >
          {t("hero.releaseBadge")}
        </MaskedBox>
        <P className="max-w-xl text-gray-200 mb-8">{t("hero.subtitle")}</P>

        {/* Plattform-Buttons */}
        <div className="flex flex-wrap gap-6 justify-center mt-8">
          {platforms.map((platform) => (
            <Link
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={platform.name}
              className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-lg border border-[#FFBF00]/30 hover:border-[#FFBF00] hover:scale-110 transition-all duration-300"
            >
              <Image
                src={platform.logo}
                alt={platform.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 pb-24 space-y-16">
        <section>
          <H2 className="!text-[#FFBF00] text-3xl font-bold mb-4 text-center">
            {t("about.title")}
          </H2>
          <P className="text-white">{t("about.paragraph")}</P>
        </section>

        {/* Features */}
        <section>
          <H2 className="!text-[#FFBF00] text-3xl font-bold mb-6 text-center">
            {t("features.title")}
          </H2>
          <div className="grid sm:grid-cols-2 gap-4">
            {getList("features.list").map((feature, i) => (
              <MaskedBox
                key={i}
                maskSrc={BUTTON_MASK}
                className="bg-[#FFBF00]/15 p-4"
                contentClassName="flex items-start gap-3 text-white"
              >
                <span className="text-[#FFBF00] text-xl leading-none">●</span>
                <span className="text-white">{feature}</span>
              </MaskedBox>
            ))}
          </div>
        </section>

        <section>
          <H3 className="!text-[#F8A300] text-2xl font-semibold mb-3">
            {t("modes.title")}
          </H3>
          <P className="text-white">{t("modes.paragraph")}</P>
        </section>

        <section>
          <H3 className="!text-[#F8A300] text-2xl font-semibold mb-3">
            {t("custom.title")}
          </H3>
          <P className="text-white">{t("custom.paragraph")}</P>
        </section>

        <section>
          <H3 className="!text-[#F8A300] text-2xl font-semibold mb-3">
            {t("themes.title")}
          </H3>
          <P className="text-white">{t("themes.paragraph")}</P>
        </section>

        {/* Steam Shopseite */}
        <section className="text-center pt-8 border-t border-white/20">
          <P className="text-white mb-4">{t("bottomCta.text")}</P>
          <MaskedBox
            as={Link}
            href={STEAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            maskSrc={BUTTON_MASK}
            className="inline-block bg-[#FFBF00]/80 hover:bg-[#F8A300]/90 px-6 py-3 transition-colors cursor-pointer"
            contentClassName="text-white font-semibold"
          >
            {t("hero.wishlistCta")} ➔
          </MaskedBox>
        </section>
      </div>

      <LastEdited date="14.07.2026" />
    </div>
  );
}
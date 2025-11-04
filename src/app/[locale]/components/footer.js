"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const pathname = usePathname();
  const t = useTranslations("Footer");

  const switchLocalePath = (targetLocale) => {
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length === 0) return `/${targetLocale}`;
    parts[0] = targetLocale;
    return "/" + parts.join("/");
  };

  const links = [
    { href: "/kontakt", label: t("kontakt") },
    { href: "/impressum", label: t("impressum") },
  ];

  return (
    <footer className="z-50 backdrop-blur bg-gray-900 bg-opacity-90 border-t border-gray-700 py-4 px-6 flex flex-col items-center gap-2">
      <div className="text-gray-400 text-sm">
        {t("copyright", { year: new Date().getFullYear() })}
      </div>

      <div className="flex items-center gap-2 text-gray-100">
        {links.map(({ href, label }, index) => (
          <span key={label} className="flex items-center">
            <Link href={`/${pathname.split("/")[1]}${href}`} className="relative text-gray-100 hover:text-teal-400 transition-colors duration-300 group">
              {label}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-teal-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            {index === 0 && <span className="mx-2 select-none text-xl">·</span>}
          </span>
        ))}
      </div>

      {/* Sprache */}
      <div className="flex gap-4 mt-2">
        <Link href={switchLocalePath("de")} className="hover:text-teal-400">🇩🇪 DE</Link>
        <Link href={switchLocalePath("en")} className="hover:text-teal-400">🇬🇧 EN</Link>
      </div>
    </footer>
  );
}

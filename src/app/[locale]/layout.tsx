import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./../globals.css";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!["de", "en"].includes(locale)) {
    notFound();
  }

  let messages;
  try {
    const [common, faq, footer, home, minecraft, navbar, projects] = await Promise.all([
      import(`../../messages/${locale}/common.json`),
      import(`../../messages/${locale}/faq.json`),
      import(`../../messages/${locale}/footer.json`),
      import(`../../messages/${locale}/home.json`),
      import(`../../messages/${locale}/minecraft.json`),
      import(`../../messages/${locale}/navbar.json`),
      import(`../../messages/${locale}/projects.json`),
    ]);

    messages = {
      common: common.default,
      faq: faq.default,
      footer: footer.default,
      home: home.default,
      minecraft: minecraft.default,
      navbar: navbar.default,
      projects: projects.default,
    };
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
        <Navbar />
        <main className="sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}

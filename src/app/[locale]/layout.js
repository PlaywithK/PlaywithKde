import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "../globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Google Fonts einbinden
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Globale Metadata
export const metadata = {
  title: "PlaywithK.de",
  description: "Offizielle Website von PlaywithK. Projekte, Community und mehr.",
};

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* Navigation */}
          <Navbar />

          {/* Seiteninhalt */}
          {children}

          {/* Footer */}
          <Footer />

          {/* Vercel Analytics + Speed Insights */}
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

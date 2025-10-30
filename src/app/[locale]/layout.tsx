import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "../globals.css";

type Props = {
  children: ReactNode;
  params: any;
};

export default async function LocaleLayout({ children, params }: Props) {
  const locale: string = params?.locale || "de";

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="bg-gray-900 text-gray-100">
        {/* Header / Navbar */}
        <Navbar />

        {/* Page Content */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

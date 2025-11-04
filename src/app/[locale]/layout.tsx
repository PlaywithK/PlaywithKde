import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "../globals.css";

type LocaleLayoutProps = {
  children: ReactNode;
  params: { [key: string]: string };
};


export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = params?.locale ?? "de";

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}

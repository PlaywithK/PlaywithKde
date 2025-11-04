// src/app/[locale]/LocaleLayoutContent.tsx
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

interface Props {
  children: ReactNode;
  locale: string;
}

export default async function LocaleLayoutContent({ children, locale }: Props) {
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

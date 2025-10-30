import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "../globals.css";

type Props = {
  children: ReactNode;
  params: any; // <-- hier auf `any`, sonst beschwert sich TypeScript
};

export default async function LocaleLayout({ children, params }: Props) {
  const locale: string = params?.locale || "de"; // Fallback auf "de"

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

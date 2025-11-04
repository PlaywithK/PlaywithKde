// src/app/[locale]/layout.tsx
import { ReactNode } from "react";
import LocaleLayoutContent from "./LocaleLayoutContent";

export default function LocaleLayout({ children, params }: { children: ReactNode; params: { locale: string } }) {
  const locale = params.locale ?? "de";

  return <LocaleLayoutContent locale={locale}>{children}</LocaleLayoutContent>;
}

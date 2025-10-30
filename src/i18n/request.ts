// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // locale kommt aus der URL /de oder /en
  const currentLocale = locale || 'de'; // Fallback auf 'de'

  let messages;
  try {
    messages = (await import(`../messages/${currentLocale}.json`)).default;
  } catch {
    throw new Error(`Messages for locale "${currentLocale}" not found`);
  }

  return {
    locale: currentLocale,
    messages
  };
});

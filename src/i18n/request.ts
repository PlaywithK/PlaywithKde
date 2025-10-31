import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale || 'en';

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

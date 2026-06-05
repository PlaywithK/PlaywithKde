import { getRequestConfig } from 'next-intl/server';

async function loadMessage(locale: string, file: string) {
  try {
    return (await import(`../messages/${locale}/${file}.json`)).default;
  } catch (err) {
    throw new Error(
      `Test Missing translation file: messages/${locale}/${file}.json`
    );
  }
}

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale || 'en';

  const messages = {
    home: await loadMessage(currentLocale, 'home'),
    projects: await loadMessage(currentLocale, 'projects'),
    minecraft: await loadMessage(currentLocale, 'minecraft'),
    faq: await loadMessage(currentLocale, 'faq'),
    navbar: await loadMessage(currentLocale, 'navbar'),
    footer: await loadMessage(currentLocale, 'footer'),
  };

  return {
    locale: currentLocale,
    messages
  };
});
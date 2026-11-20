import { getRequestConfig } from 'next-intl/server';
import { loadLocaleMessages } from './messages';

export default getRequestConfig(async ({ requestLocale }) => {
  const currentLocale = (await requestLocale) || 'en';
  const messages = await loadLocaleMessages(currentLocale);

  return {
    locale: currentLocale,
    messages
  };
});
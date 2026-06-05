import { getRequestConfig } from 'next-intl/server';
import { loadLocaleMessages } from './messages';

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale || 'en';
  const messages = await loadLocaleMessages(currentLocale);

  return {
    locale: currentLocale,
    messages
  };
});
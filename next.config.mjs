import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  reactStrictMode: true,
  // hier kannst du weitere Next.js Einstellungen setzen
};

export default createNextIntlPlugin()(nextConfig);

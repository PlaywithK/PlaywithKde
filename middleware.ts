import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // 👇 hier deine unterstützten Sprachen
  locales: ['de', 'en'],

  // 👇 welche Sprache soll standardmäßig aktiv sein
  defaultLocale: 'en'
});

// 👇 definiert, für welche Routen die Middleware greifen soll
export const config = {
  matcher: [
    '/',                // Root-Route (z. B. https://domain.de/)
    '/(de|en)/:path*'   // alle Routen mit Locale
  ]
};

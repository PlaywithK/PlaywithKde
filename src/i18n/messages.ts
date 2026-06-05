export async function loadLocaleMessages(locale: string) {
  const [common, faq, footer, home, minecraft, navbar, projects] = await Promise.all([
    import(`../messages/${locale}/common.json`),
    import(`../messages/${locale}/faq.json`),
    import(`../messages/${locale}/footer.json`),
    import(`../messages/${locale}/home.json`),
    import(`../messages/${locale}/minecraft.json`),
    import(`../messages/${locale}/navbar.json`),
    import(`../messages/${locale}/projects.json`),
  ]);

  return {
    common: common.default,
    faq: faq.default,
    footer: footer.default,
    home: home.default,
    minecraft: minecraft.default,
    navbar: navbar.default,
    projects: projects.default,
  };
}

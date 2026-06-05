export async function loadLocaleMessages(locale: string) {
  const [common, faq, footer, home, minecraft, navbar, projects, kontakt, imprint, playwithk, pwkentertainment] = await Promise.all([
    import(`../messages/${locale}/common.json`),
    import(`../messages/${locale}/faq.json`),
    import(`../messages/${locale}/footer.json`),
    import(`../messages/${locale}/home.json`),
    import(`../messages/${locale}/minecraft.json`),
    import(`../messages/${locale}/navbar.json`),
    import(`../messages/${locale}/projects.json`),
    import(`../messages/${locale}/contact.json`),
    import(`../messages/${locale}/imprint.json`),
    import(`../messages/${locale}/playwithk.json`),
    import(`../messages/${locale}/pwkentertainment.json`),
  ]);

  return {
    common: common.default,
    faq: faq.default,
    footer: footer.default,
    home: home.default,
    minecraft: minecraft.default,
    navbar: navbar.default,
    projects: projects.default,
    contact: kontakt.default,
    imprint: imprint.default,
    playwithk: playwithk.default,
    pwkentertainment: pwkentertainment.default,
  };
}

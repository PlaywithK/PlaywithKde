export async function loadLocaleMessages(locale: string) {
  const [common, faq, footer, home, minecraft, navbar, projects, numble, kontakt, imprint, playwithk, pwkentertainment, appdev, privacypolicy] = await Promise.all([
    import(`../messages/${locale}/common.json`),
    import(`../messages/${locale}/faq.json`),
    import(`../messages/${locale}/footer.json`),
    import(`../messages/${locale}/home.json`),
    import(`../messages/${locale}/minecraft.json`),
    import(`../messages/${locale}/navbar.json`),
    import(`../messages/${locale}/projects.json`),
    import(`../messages/${locale}/numble.json`),
    import(`../messages/${locale}/contact.json`),
    import(`../messages/${locale}/imprint.json`),
    import(`../messages/${locale}/playwithk.json`),
    import(`../messages/${locale}/pwkentertainment.json`),
    import(`../messages/${locale}/appdev.json`),
    import(`../messages/${locale}/privacypolicy.json`),
  ]);

  return {
    common: common.default,
    faq: faq.default,
    footer: footer.default,
    home: home.default,
    minecraft: minecraft.default,
    navbar: navbar.default,
    projects: projects.default,
    numble: numble.default,
    contact: kontakt.default,
    imprint: imprint.default,
    playwithk: playwithk.default,
    pwkentertainment: pwkentertainment.default,
    appdev: appdev.default,
    privacypolicy: privacypolicy.default,
  };
}

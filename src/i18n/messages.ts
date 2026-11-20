const namespaces = {
    common: "shared/common",
    navbar: "shared/navbar",
    footer: "shared/footer",

    home: "pages/home",
    faq: "pages/faq",
    contact: "pages/contact",
    links: "pages/links",
    changelog: "pages/changelog",
    downloads: "pages/downloads",
    stream: "pages/stream",
    sociallinks: "pages/sociallinks",
    forum: "pages/forum",
    playwithk: "pages/playwithk",
    pwkentertainment: "pages/pwkentertainment",

    projects: "projects/projects",
    webdev: "projects/webdev",
    gamedev: "projects/gamedev",
    gamedevnotes: "projects/gamedevnotes",
    appdev: "projects/appdev",
    numble: "projects/numble",

    minecraft: "minecraft/minecraft",
    winterprojekt: "minecraft/winterprojekt",

    imprint: "legal/imprint",
    privacypolicy: "legal/privacypolicy",
} as const;

export async function loadLocaleMessages(locale: string) {
    const entries = await Promise.all(
        Object.entries(namespaces).map(async ([key, path]) => {
            try {
                const mod = await import(`../messages/${locale}/${path}.json`);
                return [key, mod.default] as const;
            } catch (e) {
                console.error(`Missing File: src/messages/${locale}/${path}.json`);
                throw e;
            }
        })
    );

    return Object.fromEntries(entries);
}
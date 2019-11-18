// Only one item MUST have the "default: true" key

module.exports = {
    en: {
      default: true,
      path: `en`,
      locale: `en-US`,
      dateFormat: `DD/MM/YYYY`,
      siteLanguage: `en`,
      ogLanguage: `en_US`,
      defaultTitle: `Using i18n with Gatsby`,
      defaultDescription: `Gatsby example site using MDX and dependency-free i18n`,
    },
    vi: {
      default: false,
      path: `vi`,
      locale: `vi-VN`,
      dateFormat: `DD/MM/YYYY`,
      siteLanguage: `vi`,
      ogLanguage: `vi_VN`,
      defaultTitle: `i18n mit Gatsby nutzen`,
      defaultDescription: `Gatsby Beispielseite, die MDX und i18n (frei von dependencies) nutzt`,
    },
  }
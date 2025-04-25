require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentación PGC España',
  tagline: 'Documentación del Plan General de Contabilidad (RD 1514/2007)',
  url: 'https://tonicanada.github.io',
  organizationName: 'tonicanada',
  projectName: 'pgc-spain-docs',
  trailingSlash: false,
  baseUrl: '/pgc-spain-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars/sidebars.js'),
          editUrl: 'https://github.com/tonicanada/pgc-spain-docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    navbar: {
      title: 'PGC Español',
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { to: '/introduction', label: 'Introducción', position: 'left' },
        { to: '/docs/plan-de-cuentas', label: 'Plan de cuentas', position: 'left' }
      ],
    },
    algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME,
      contextualSearch: true,
      searchParameters: {},
    },
    metadata: [
      {
        name: "algolia-site-verification",
        content: "7FD546744E8EA6D0",
      },
    ],
  }),
};


module.exports = config;
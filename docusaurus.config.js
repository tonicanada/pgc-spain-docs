require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Documentación PGC España",
  tagline: "Documentación del Plan General de Contabilidad (RD 1514/2007)",
  url: "https://tonicanada.github.io",
  organizationName: "tonicanada",
  projectName: "pgc-spain-docs",
  trailingSlash: false,
  baseUrl: "/pgc-spain-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/icons/logo_bizmotion.ico",
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve('./sidebars/sidebars.js'),
        //   editUrl: 'https://github.com/tonicanada/pgc-spain-docs/tree/master/',
        // },
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    // Instancia "PGC General"
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "pgc-general", // ID único
        path: "docs", // carpeta docs/
        routeBasePath: "docs", // URL → /docs/...
        sidebarPath: require.resolve("./sidebars/sidebars.js"),
        editUrl: "https://github.com/tonicanada/pgc-spain-docs/tree/master/",
      },
    ],
    // Instancia "Curso"
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "curso", // otro ID único
        path: "curso", // carpeta sector-publico/
        routeBasePath: "curso", // URL → /sector-publico/...
        sidebarPath: require.resolve("./sidebars/sidebarsCurso.js"),
        editUrl: "https://github.com/tonicanada/pgc-spain-docs/tree/master/",
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
      navbar: {
        title: "PGC Español",
        items: [
          { to: "/curso", label: "Curso", position: "left" },
          {
            to: "/docs/plan-de-cuentas",
            label: "Plan de cuentas",
            position: "left",
          },
        ],
      },
      colorMode: {
        defaultMode: 'light', // Establece el tema claro como predeterminado
        disableSwitch: true, // Desactiva el interruptor de cambio de tema
        respectPrefersColorScheme: false, // Ignora la preferencia del sistema del usuario
      },
      footer: {
        style: "light",
        links: [], // Deja vacío para que no agregue columnas innecesarias
        copyright: `
          <div style="display: flex; justify-content: center; gap: 1.5rem; align-items: center; margin-bottom: 0.5rem;">
            <a href="https://www.linkedin.com/in/antoniocanada/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <img src="/pgc-spain-docs/img/icons/logo_linkedin.svg" alt="LinkedIn" width="24" height="24" />
            </a>
            <a href="https://github.com/tonicanada" target="_blank" rel="noopener" aria-label="GitHub">
              <img src="/pgc-spain-docs/img/icons/logo_github.svg" alt="GitHub" width="24" height="24" />
            </a>
            <a href="https://acmsoftware.cl/" target="_blank" rel="noopener" aria-label="Blog">
              <img src="/pgc-spain-docs/img/icons/logo_blog.svg" alt="Blog" width="24" height="24" />
            </a>
            <a href="https://medium.com/@tonicanada" target="_blank" rel="noopener" aria-label="Medium">
              <img src="/pgc-spain-docs/img/icons/logo_medium.svg" alt="Medium" width="24" height="24" />
            </a>
          </div>
          <div style="text-align: center;">
            © ${new Date().getFullYear()} Antonio Cañada. Todos los derechos reservados.
          </div>
        `,
      },
      algolia: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        contextualSearch: false,
        searchParameters: {},
      },
      metadata: [
        {
          name: "algolia-site-verification",
          content: "7FD546744E8EA6D0",
        },
        {
          name: "keywords",
          content: "PGC, contabilidad, ERPNext, plan general contable, plan contable España, normas contables, asesor contable, consultor ERP, contabilidad España, curso PGC, curso contabilidad, ERP open source, contabilidad digital, software contable, formación contabilidad, formación ERP, ERP para pymes, automatización contable, normativa contable española, contabilidad financiera, cuentas anuales, cuadro de cuentas, integraciones ERPNext, implementación ERPNext, contabilidad para autónomos, balance de situación, cuenta de pérdidas y ganancias"
        },
        {
          name: "author",
          content: "Antonio Cañada Momblant",
        },
        {
          name: "description",
          content: "Sitio web sobre el Plan General Contable español (PGC) y su integración con ERPNext. Curso práctico y documentación para consultores y empresas en España.",
        }
      ],
    }),
};

module.exports = config;

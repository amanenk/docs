const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CloudQuery Docs',
  tagline: 'the open-source cloud asset inventory powered by SQL',
  url: 'https://docs.cloudquery.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cloudquery', // Usually your GitHub org/user name.
  projectName: 'cq-docs', // Usually your repo name.
  trailingSlash: false, // keep URLs without slash at the end, example https://docs.cloudquery.io/docs/intro
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'CloudQuery Docs',
      logo: {
        alt: 'CloudQuery Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'Docs',
        // },
        {to: 'https://www.cloudquery.io', label: 'Home', position: 'right'},
        {to: 'https://hub.cloudquery.io', label: 'Hub', position: 'right'},
        {to: 'https://www.cloudquery.io/blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/cloudquery/cloudquery',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://www.cloudquery.io/discord',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/cloudquery',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/cloudqueryio',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://www.cloudquery.io/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/cloudquery/cloudquery',
            },
            {
              html: `<a href="javascript:window.cookiehub.openSettings();" class="footer__link-item">
                      Manage Cookie
                    </a>`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CloudQuery, Inc.`,
    },
    prism: {
      darkTheme: darkCodeTheme,
      theme: lightCodeTheme,
      additionalLanguages: ['hcl', 'powershell'],
    },
    algolia: {
      apiKey: '352df9e488908ea5508fcb90609a6fcc',
      indexName: 'cloudquery',

      // Optional: see doc section below
      contextualSearch: false,

      // Optional: see doc section below
      appId: 'RTT4J284TL',

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/cloudquery/docs/edit/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/cloudquery/docs/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        }
      ]
  ],
  stylesheets: [
    {
      href: '/css/cookie_consent.css',
    },
  ],
  scripts: [
    {
      src: 'https://cookiehub.net/c2/a2beec98.js',
      async: false,
    },
    {
      src: '/js/loadCookieHub.js',
      async: false,
    },
    //CookieHub script must be loaded before gtag script for consent management
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-48CC3FJ195',
      async: true,
    },
    {
      src: '/js/loadGtag.js',
      async: false,
    },
  ],
};

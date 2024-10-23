import { defineConfig } from "vitepress";
import { createRolesSidebar } from "../roles/roleDynamicContent.mts"
import roleLoader from "../roles/roles.data.mts"

const base = '/werewolf-guide/';

const roles = await roleLoader.load();

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "de-CH",
  title: "Werwolf (Mafia) Guide",
  description:
    "Sammlung von Regeln und Charakteren für das Spiel Werwolf (Mafia)",
  base,
  // öppis mitm favicon isch noni guet
  head: [
    ['link', { rel: 'icon', href: base + 'favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: base + 'images/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: base + 'images/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: base + 'images/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: base + 'manifest.webmanifest' }],
    // ['meta', { name: 'background-color', content: 'TODO' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    // Verification for Google Search Console (analytics about which search terms led to this page)
    ['meta', { name: 'google-site-verification', content: 'UK8Uo_AzfqRzcTvNzPlxOZl3TVCVWxW2gGTjEr6qpAw' }],
  ],
  cleanUrls: true,
  sitemap: {
    hostname: "https://joelius300.github.io" + base,
  },
  // markdown: TODO add footnote extension
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Regeln',
        link: '/rules/',
      },
      {
        text: 'Charakter-Details',
        link: '/roles/',
      },
      {
        text: 'Inspirationen',
        link: '/inspirations',
      },
    ],
    sidebar: {
      '/rules/': [
        {
          text: 'Regeln',
          items: [
            { text: "Grundregeln", link: "/rules/index" },
            { text: "Teams", link: "/rules/teams" },
            { text: "Rollen", link: "/rules/roles" },
            { text: "Variationen", link: "/rules/variations" },
          ],
        },
      ],
      '/roles/': [
        {
          text: "Rollen in Detail",
          items: createRolesSidebar(roles)
        }
      ]
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/Joelius300/werewolf-guide" },
    ],
    editLink: {
      text: "Würdsch öppis ändere?",
      pattern: "https://github.com/Joelius300/werewolf-guide/edit/main/guide/:path",
    },
    logo: {
      light: '/images/wolf_icon_black.svg',
      dark: '/images/wolf_icon_white.svg',
      alt: "Wolf-Logo",
    },
    darkModeSwitchLabel: "Light/Dark Mode",
    lightModeSwitchTitle: "Mach hell",
    darkModeSwitchTitle: "Mach dunkel",
    sidebarMenuLabel: "Menü",
    // notFound: TODO german text
    // TODO translate "in this file" on the right side
    externalLinkIcon: true,
    footer: {
      message: '<div id="license_footer" style="display: flex; flex-direction: column; align-items: center"> <a target="_blank" rel="license noopener noreferrer" href="http://creativecommons.org/licenses/by-sa/4.0/"> <img alt="Creative Commons License" style="border-width: 0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /> </a> <p>Dieser Guide ist lizenziert unter <a target="_blank" rel="license noopener noreferrer" href="http://creativecommons.org/licenses/by-sa/4.0/"><abbr title="Creative Commons Attribution-ShareAlike 4.0 International License">CC BY-SA 4.0</abbr></a>.</p><p>Das Wolf-Icon gehört <a target="_blank" rel="noopener noreferrer" href="https://www.mcicon.com/product/wolf-icon-15/">MCICON<OutboundLink/></a>.</p></div>',
    },
    search: {
      provider: "local",
    },
  },
});

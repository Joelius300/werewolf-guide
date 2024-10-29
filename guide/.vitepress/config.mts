import { defineConfig } from "vitepress"
import { createRolesSidebar } from "../rollen/roleDynamicContent.mts"
import roleLoader from "../rollen/roles.data.mts"
import mdFootnotes from 'markdown-it-footnote'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'
import { withPwa } from '@vite-pwa/vitepress'

const base = '/werewolf-guide/';

const roles = await roleLoader.load();

// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  lang: "de-CH",
  title: "Werwolf (Mafia) Guide",
  description:
    "Sammlung von Regeln und Rollen für das Spiel Werwolf (Mafia)",
  base,
  // These icon links etc. needed for PWA could also be dynamically injected via PWA Assets
  // https://vite-pwa-org.netlify.app/frameworks/vitepress#pwa-assets
  head: [
    ['link', { rel: 'icon', href: base + 'favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: base + 'images/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: base + 'images/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: base + 'images/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: base + 'manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3a5ccc' }],
    // Verification for Google Search Console (analytics about which search terms led to this page)
    ['meta', { name: 'google-site-verification', content: 'UK8Uo_AzfqRzcTvNzPlxOZl3TVCVWxW2gGTjEr6qpAw' }],
  ],
  cleanUrls: true,
  sitemap: {
    hostname: "https://joelius300.github.io" + base,
  },
  markdown: {
    config: (md) => {
      md.use(mdFootnotes)
    }
  },
  vite: {
    plugins: [pagefindPlugin({
      btnPlaceholder: 'Suche',
      placeholder: 'Durchsuchen',
      emptyText: 'Keine Resultate.',
      heading: 'Gefunden: {{searchResult}} Resultate',
      toSelect: 'Auswählen',
      toNavigate: 'Navigieren',
      toClose: 'Schliessen',
      searchBy: 'Powered by',
    })],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Regeln',
        link: '/regeln/',
      },
      {
        text: 'Rollen',
        link: '/rollen/',
      },
      {
        text: 'Inspirationen',
        link: '/inspirationen',
      },
    ],
    sidebar: {
      '/regeln/': [
        {
          text: 'Regeln',
          items: [
            { text: "Grundregeln", link: "/regeln" },
            { text: "Teams", link: "/regeln/teams" },
            { text: "Rollen", link: "/regeln/rollen" },
            { text: "Varianten", link: "/regeln/varianten" },
          ],
        },
      ],
      '/rollen/': [
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
    externalLinkIcon: true,
    footer: {
      // Docs say that you can only put inline elements here, but it seems to work fine.
      // Using a custom layout with this html in the footer slot looks worse.
      message: '<div id="license_footer" style="display: flex; flex-direction: column; align-items: center"> <a target="_blank" rel="license noopener noreferrer" href="http://creativecommons.org/licenses/by-sa/4.0/"> <img alt="Creative Commons License" style="border-width: 0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /> </a> <p>Dieser Guide ist lizenziert unter <a target="_blank" rel="license noopener noreferrer" href="http://creativecommons.org/licenses/by-sa/4.0/"><abbr title="Creative Commons Attribution-ShareAlike 4.0 International License">CC BY-SA 4.0</abbr></a>.</p><p>Das Wolf-Icon gehört <a target="_blank" rel="noopener noreferrer" href="https://www.mcicon.com/product/wolf-icon-15/">MCICON</a>.</p></div>',
    },
    outline: {
      label: "Inhalt",
    },
    notFound: {
      title: "Uups, da het eine vergä",
      quote: "Hoffe mr dr Räst vor Site isch guet :)",
      linkText: "Zrügg ga",
    },
    returnToTopLabel: "Zurück nach oben",
    search: {
      provider: "local",
    },
    docFooter: {
      next: "Nächste Seite",
      prev: "Vorherige Seite",
    },
  },
  pwa: {
    strategies: "generateSW",
    registerType: "autoUpdate",  // not sure what the downside is, does it refresh annoyingly?
    manifest: false,  // use our own, do not generate one
    // same filename as vuepress-pwa plugin, allows this framework change
    // to be recognized as an update and applied to users automatically.
    filename: "service-worker.js",
  }
}));

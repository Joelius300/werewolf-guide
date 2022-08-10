import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://joelius300.github.io",

  author: {
    name: "Joel L.",
    url: "https://github.com/Joelius300",
  },

  iconAssets: "iconfont",

  logo: 'images/wolf_icon_black.svg',
  logoDark: 'images/wolf_icon_white.svg',

  repo: 'https://github.com/Joelius300/werewolf-guide',
  repoLabel: 'Projekt',
  docsRepo: 'https://github.com/Joelius300/werewolf-guide',
  docsBranch: 'main',
  editLink: true,
  // editLinkText: 'Würdsch öppis ändere?',
  docsDir: 'guide',
  lastUpdated: false,
  contributors: false,
  // contributorsText: 'Autoren',

  navbar,
  sidebar,
  displayFooter: false,

  pageInfo: [],

  plugins: {
    mdEnhance: {
      footnote: true,
      sub: true,
      sup: true,
    },
  },
});

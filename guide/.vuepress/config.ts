import { path } from '@vuepress/utils';
import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
import { createCharactersPage } from './SSR-enhancements/characterSummaries';
import { createDetailPages } from './SSR-enhancements/characterDetails';
import mdFootnotes from 'markdown-it-footnote';

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'de-CH',
  title: 'Werwolf (Mafia) Guide',
  description: 'Sammlung von Regeln und Charakteren für das Spiel Werwolf (Mafia)',
  theme: path.resolve(__dirname, './theme'),
  base: '/werewolf-guide/',
  head: [
    [
      'link', { rel: 'icon', href: 'images/wolf_icon_black_on_white.png' },
    ],
  ],
  themeConfig: {
    logo: 'images/wolf_icon_black.svg',
    logoDark: 'images/wolf_icon_white.svg',
    locales: {
      '/': {
        backToHome: 'Gömer zrügg',
        repo: 'https://github.com/Joelius300/werewolf-guide',
        repoLabel: 'Projekt',
        docsRepo: 'https://github.com/Joelius300/werewolf-guide',
        docsBranch: 'master',
        editLinkText: 'Passt dr öppis nid?',
        docsDir: 'guide',
        lastUpdated: false,
        contributorsText: 'Autoren',
        navbar: [
          {
            text: 'Charaktere',
            link: '/characters/',
          },
          {
            text: 'Inspirationen',
            link: '/inspirations.md',
          },
        ],
      },
    },
  },
  extendsMarkdown: (md) => {
    md.use(mdFootnotes);
  },
  onInitialized: async (app) => {
    createCharactersPage(app);
    createDetailPages(app);
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Suche',
          },
        },
      },
    ],
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html',
      },
    ],
  ],
});
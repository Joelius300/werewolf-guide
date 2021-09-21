import { path } from '@vuepress/utils';
import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
import { createCharactersPage } from './SSR-enhancements/characterSummaries';
import { createDetailPages, createDetailsSidebar } from './SSR-enhancements/characterDetails';
import mdFootnotes from 'markdown-it-footnote';

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'de-CH',
  title: 'Werwolf (Mafia) Guide',
  description: 'Sammlung von Regeln und Charakteren für das Spiel Werwolf (Mafia)',
  theme: path.resolve(__dirname, './theme'),
  base: '/werewolf-guide/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'images/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'images/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'images/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: 'manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#fff' }],
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
        editLink: true,
        editLinkText: 'Würdsch öppis änderä?',
        docsDir: 'guide',
        lastUpdated: false,
        contributorsText: 'Autoren',
        navbar: [
          {
            text: 'Regeln',
            link: '/rules/',
          },
          {
            text: 'Charakter-Details',
            link: '/rules/characters/',
          },
          {
            text: 'Inspirationen',
            link: '/inspirations.html',
          },
        ],
        sidebar: {
          '/rules/': [
            {
              text: 'Regeln',
              children: [
                'README.md',
                'teams.md',
                'characterSummaries.html',
                'variations.md',
              ],
            },
          ],
          '/rules/characters/': createDetailsSidebar(),
          '/': [
            '',
          ],
        },
      },
    },
  },
  extendsMarkdown: (md) => {
    md.use(mdFootnotes);
  },
  onInitialized: async (app) => {
    await createDetailPages(app);
    await createCharactersPage(app);
  },
  // onWatched: async (app, watchers) => {
  /* If you want hot reload for the generated pages,
   * you'll have to implement it yourself.
   * Here's an issue: https://github.com/vuepress/vuepress-next/issues/294
   * Docs: https://v2.vuepress.vuejs.org/reference/plugin-api.html#onwatched
   * Reference: https://github.com/vuepress/vuepress-next/blob/main/packages/@vuepress/cli/src/commands/dev/watchPageFiles.ts#L10-L13
   */
  // },
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
    [
      '@vuepress/plugin-pwa',
      {
        skipWaiting: false,
      },
    ],
    [
      '@vuepress/plugin-pwa-popup',
      {
        locales: {
          '/': {
            message: 'Neue Inhalte sind verfügbar.',
            buttonText: 'Neu laden',
          },
        },
      },
    ],
  ],
});
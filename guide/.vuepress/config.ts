import { path } from '@vuepress/utils';
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'de-CH',
  title: 'Werwolf (Mafia) Guide',
  description: 'Sammlung von Regeln und Charakteren für das Spiel Werwolf (Mafia)',
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    locales: {
      '/': {
        backToHome: "Gömer zrügg",
        repo: 'https://github.com/Joelius300/werewolf-guide',
        repoLabel: 'Projekt',
        docsRepo: 'https://github.com/Joelius300/werewolf-guide',
        docsBranch: 'master',
        editLinkText: 'Passt dr öppis nid?',
        docsDir: 'book_vuepress/guide',
        lastUpdated: false,
        contributorsText: 'Autoren',
        navbar: [
          {
            text: 'Charaktere',
            link: '/characters.md'
          },
          {
            text: 'Inspirationen',
            link: '/inspirations.md'
          },
        ]
      },
    }
  },
  extendsMarkdown: (md) => {
    md.use(require('markdown-it-footnote'));
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
})
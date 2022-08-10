import { defineUserConfig } from "vuepress";
import { createDetailPages } from "./pageGeneration/characterDetails";
import { createCharactersPage } from "./pageGeneration/characterSummaries";
import theme from "./theme";

const base = '/werewolf-guide/';

export default defineUserConfig({
  lang: 'de-CH',
  title: 'Werwolf (Mafia) Guide',
  description: 'Sammlung von Regeln und Charakteren für das Spiel Werwolf (Mafia)',
  base,
  theme,
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: base + 'images/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: base + 'images/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: base + 'images/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: base + 'manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    // Verification for Google Search Console (analytics about which search terms led to this page)
    ['meta', { name: 'google-site-verification', content: 'UK8Uo_AzfqRzcTvNzPlxOZl3TVCVWxW2gGTjEr6qpAw' }],
  ],
  onInitialized: async (app) => {
    await createDetailPages(app);
    await createCharactersPage(app);
  },
});

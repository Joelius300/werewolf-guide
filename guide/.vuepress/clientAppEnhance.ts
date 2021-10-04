import { defineClientAppEnhance } from '@vuepress/client';
import Plausible from 'plausible-tracker';
import ButtonTest from './components/ButtonTest.vue';

declare const __VUEPRESS_SSR__: boolean;
declare global {
  interface Window {
    plausible: ReturnType<typeof Plausible>;
  }
}

export default defineClientAppEnhance(({ app }) => {
  app.component('ButtonTest', ButtonTest);

  if (__VUEPRESS_SSR__ || typeof window === 'undefined' || window.plausible)
    return;

  const plausible = Plausible({
    domain: 'joelius300.github.io/werewolf-guide',
  });

  plausible.enableAutoPageviews();
  plausible.enableAutoOutboundTracking();

  window.plausible = plausible;
});

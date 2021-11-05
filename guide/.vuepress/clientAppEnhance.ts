import { defineClientAppEnhance } from '@vuepress/client';
import Plausible from 'plausible-tracker';

declare const __VUEPRESS_SSR__: boolean;
declare global {
  interface Window {
    plausible: ReturnType<typeof Plausible>;
  }
}

export default defineClientAppEnhance(() => {
  if (__VUEPRESS_SSR__ || typeof window === 'undefined' || window.plausible)
    return;

  const plausible = Plausible({
    domain: 'joelius300.github.io/werewolf-guide',
  });

  plausible.enableAutoPageviews();
  // This breaks all outbound links unfortunately since they should open in a new tab
  // and that doesn't happen because of this tracking implementation.
  // https://github.com/plausible/plausible-tracker/issues/12
  // plausible.enableAutoOutboundTracking();

  window.plausible = plausible;
});

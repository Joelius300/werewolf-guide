import { defineClientAppEnhance } from '@vuepress/client';

declare const __VUEPRESS_SSR__: boolean
declare global {
  interface Window {
    plausible: HTMLScriptElement;
  }
}

export default defineClientAppEnhance(() => {
  if (__VUEPRESS_SSR__ || typeof window === 'undefined' || window.plausible)
    return;

  const plausibleScript = document.createElement('script');
  plausibleScript.setAttribute('data-domain', 'joelius300.github.io/werewolf-guide');
  plausibleScript.src = 'https://plausible.io/js/plausible.js';
  plausibleScript.async = true;
  plausibleScript.defer = true;

  document.head.appendChild(plausibleScript);

  window.plausible = plausibleScript;
});

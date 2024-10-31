import type { Theme as ThemeType } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import TeamBadge from "./components/TeamBadge.vue";
import { createPlausibleTracker, type Plausible } from '@barbapapazes/plausible-tracker'
import "./custom.css"
import CustomLayout from "./CustomLayout.vue"
import { useAutoPageviews, useAutoOutboundTracking } from '@barbapapazes/plausible-tracker/extensions';

declare global {
  interface Window {
    plausible: Plausible;
  }
}

export default {
  extends: DefaultTheme,
  // Layout: if need client-side redirect: https://github.com/vuejs/vitepress/issues/4160
  Layout: CustomLayout,
  enhanceApp({ app }) {
    // register additional global components (usable in .md without import)
    app.component('TeamBadge', TeamBadge);
    // yes, env.SSR does exist. too lazy to fix the ts-error (https://vite.dev/guide/env-and-mode.html#intellisense-for-typescript)
    if (!import.meta.env.SSR && typeof window !== "undefined") {
      const plausible = createPlausibleTracker({
        domain: "joelius300.github.io/werewolf-guide"
      });

      // this just installs it blindly without any option to stop it or to adjust
      // event props later on, because we don't need them.
      useAutoPageviews(plausible).install();
      useAutoOutboundTracking(plausible).install();
      window.plausible = plausible;
    }
  }
} satisfies ThemeType

import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import TeamBadge from "../../components/TeamBadge.vue";
import "./custom.css"

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register additional global components (usable in .md without import)
    app.component('TeamBadge', TeamBadge);
  }
} satisfies Theme

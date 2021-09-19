import { defineClientAppEnhance } from '@vuepress/client';

export default defineClientAppEnhance(({ router }) => {
  // define redirects. These aren't prerendered and if you're on one and refresh the page, you'll get a 404.
  // to prevent this you have to define the redirects on your webserver as well.
  // in GitHub Pages, you'd do this with https://spa-github-pages.rafgraph.dev/ probably.
  router.addRoute({
    path: '/rules/characters/',
    redirect: '/rules/characters/villager.html',
  });
});
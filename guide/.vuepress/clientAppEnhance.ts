import { defineClientAppEnhance } from '@vuepress/client';

export default defineClientAppEnhance(({ router }) => {
  // define redirects. These aren't prerendered and if you're on one and refresh the page, you'll get a 404.
  // ~~to prevent this you have to define the redirects on your webserver as well.~~
  // ~~in GitHub Pages, you'd do this with https://spa-github-pages.rafgraph.dev/ probably.~~
  // Amazingly, it already works out of the Box (probably VuePress being awesome again).
  // The only thing not accounted for is SEO, as described here: https://github.com/rafgraph/spa-github-pages#seo
  
  router.addRoute({
    path: '/rules/characters/',
    redirect: '/rules/characters/villager.html',
  });
});

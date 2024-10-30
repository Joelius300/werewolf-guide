import { ContentData, createContentLoader } from 'vitepress'

// createContentLoader take a glob pattern relative to the src path (/guide/)
// but includes index.md, which is of course really fucking annoying.
export default createContentLoader("rollen/*.md", {
  includeSrc: true,
  render: false,
  excerpt: true,
  // globOptions: {
  //   doesn't work either
  //   ignore: "**/index.md",
  // },
  transform(data: ContentData[]) {
    // manually remove index.md because of course we don't want the index page in here.
    // WHY DOES IT INCLUDE THAT; THIS MUST BE THE N.1 REASON TO USE createContentLoader?!
    data.splice(data.findIndex((p) => p.url == "/rollen/"), 1);

    // TODO Use the lang that is currently used in Vitepress for localCompare
    return data.sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title, "de-CH"))
      .map((page) => ({
        url: page.url,
        // have to remove/hide heading, we want to have our own. btw, the team badge is lost in the parsed heading.
        // also, it seems to compile links to .html, even though cleanLinks is enabled, just remove them manually.
        // After some investigation, this is because the call to md.render in createContentLoader (https://github.com/vuejs/vitepress/blob/c61775a54f1742a181dd685d92dc29bd60de6440/src/node/contentLoader.ts#L147-L150)
        // does not receive the MarkdownEnv it should (compare it to createMarkdownToVueRenderFn https://github.com/vuejs/vitepress/blob/c61775a54f1742a181dd685d92dc29bd60de6440/src/node/markdownToVue.ts#L122)
        excerpt: page.excerpt?.replaceAll("<h1", "<h1 hidden").replaceAll(".html", ""),
        frontmatter: page.frontmatter,
        // if there are two consecutive #, there are sub-sections. could also check for content after '---'
        hasMoreInfo: page.src?.includes("##"),
      }))
  },
})

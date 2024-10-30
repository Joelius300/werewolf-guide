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
        // have to remove heading, we want to have our own. also, the badge is lost in the parsed heading.
        // random note on excerpt: it seems to compile links to .html, even though cleanLinks is enabled.
        excerpt: page.excerpt?.replace("<h1", "<h1 hidden"),
        frontmatter: page.frontmatter,
        // if there are two consecutive #, there are sub-sections. could also check for content after '---'
        hasMoreInfo: page.src?.includes("##"),
      }))
  },
})

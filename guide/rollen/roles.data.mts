import { ContentData, createMarkdownRenderer, defineLoader, SiteConfig } from 'vitepress'
import { fileToPath, getRolePaths, parseFrontmatter } from './roleLoader.mts';
import fs from "node:fs/promises"

interface Page extends ContentData {
  hasMoreInfo: boolean
}

type Data = Page[]

// these two lines are just for typing
declare const data: Data
export { data }

/* Heavily inspired by contentLoader (https://github.com/vuejs/vitepress/blob/main/src/node/contentLoader.ts)
  * but it's simplified a lot, assumes cleanUrls and doesn't take into account some options I'm not using anyway.
  *
  */
export default defineLoader({
  watch: "*.md",
  async load(_watchedFiles) {
    // ignore the files passed by vitepress, it's just the glob-result of the watch-pattern.
    // could either remove index.md from this or just use our already existing function.
    const paths = await getRolePaths();

    const config: SiteConfig = (globalThis as any).VITEPRESS_CONFIG;
    const cache = new Map<string, { data: any; timestamp: number }>();

    const md = await createMarkdownRenderer(
      config.srcDir,
      config.markdown,
      config.site.base,
      config.logger
    );

    // there are other options that could be incorporated here,
    // but currently I don't use them so it's simpler this way.
    // If something isn't rendered quite right in the index page, this might be why :)
    const mdEnv = { cleanUrls: !!config.cleanUrls }

    const out: Page[] = []

    for (const file of paths) {
      const timestamp = (await fs.stat(file)).mtimeMs;
      const cached = cache.get(file);
      if (cached && timestamp === cached.timestamp) {
        out.push(cached.data);
      } else {
        const { content, data: frontmatter, excerpt } = await parseFrontmatter(file);
        const url = fileToPath(file, config.cleanUrls);
        const renderedExcerpt = md.render(excerpt!, mdEnv);

        const data: Page = {
          src: content,
          html: undefined,
          frontmatter,
          // excerpt includes heading, either remove it before rendering or hide it after
          excerpt: renderedExcerpt.replaceAll("<h1", "<h1 hidden"),
          url,
          // if there are two or more consecutive #, there are sub-sections. could also check for content after '---'
          hasMoreInfo: content.includes("##")
        };

        cache.set(file, { data, timestamp });
        out.push(data);
      }
    }

    console.log(out);

    return out
  },
});


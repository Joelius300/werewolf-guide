import { createMarkdownRenderer, defineLoader } from 'vitepress'
import rolesLoader, { type Role } from '../rollen/roles.data.mts'

const config = globalThis.VITEPRESS_CONFIG;
const md = await createMarkdownRenderer(config.srcDir, config.markdown, config.site.base, config.logger);

interface RenderedRole extends Role {
  renderedSpecial: string;
}

type Data = RenderedRole[]

// these two lines are just for typing
declare const data: Data
export { data }

// This manually renders the special of the role, so that it can be used in the markdown
// template with v-html. Note that if we were not using the json solution and just had md-files,
// we could use https://vitepress.dev/guide/data-loading#createcontentloader which also returns
// a pre-rendered excerpt (content up to first divider, for us the same as `special`).
export default defineLoader({
  watch: rolesLoader.watch,
  async load(watchedFiles: string[]): Promise<Data> {
    const roles = await rolesLoader.load(watchedFiles);
    return roles.map((r: Role) => {
      return {
        renderedSpecial: md.render(r.special),
        ...r,
      }
    })
  }
})

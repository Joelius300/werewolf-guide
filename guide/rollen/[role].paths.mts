// import { data as roles } from "../.vitepress/roleLoader.mts"
import roleLoader, { type Role } from "./roles.data.mts"
import { getDetailsMd } from "./roleDynamicContent.mts"
import { slugify } from '@mdit-vue/shared'

export default {
  async paths() {
    // In .md and .vue, you can import { data } from "./roleLoader.mts" and it automatically
    // resolves it correctly and reloads when the watched file changes, but here from and mts
    // file this does not work. Currently loading the data manually doesn't watch the file of
    // course so it's not great! but at least the site compiles and works.
    const roles = await roleLoader.load();

    return roles.map((r: Role) => {
      return {
        params: {
          role: slugify(r.name),
          ...r,
        },
        frontmatter: {
          title: r.name,
          editLink: false, // TODO see if you can put an edit link to the json somehow
        },
        // we pass the built Markdown as string instead of using the
        // properties (params) in a markdown template because you cannot
        // put raw markdown to be rendered in the template using vue expressions
        // (they are put in container html elements and not translated from md->html)
        content: getDetailsMd(r)
      }
    })
  }
}

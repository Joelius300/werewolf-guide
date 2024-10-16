// import { data as roles } from "../.vitepress/roleLoader.mts"
import roleLoader, { type Role } from "../.vitepress/roleLoader.mts"

export default {
  async paths() {
    // In .md and .vue, you can import { data } from "./roleLoader.mts" and it automatically
    // resolves it correctly and reloads when the watched file changes, but here from and mts
    // file this does not work. Currently loading the data manually doesn't watch the file of
    // course so it's not great! but at least the site compiles and works.
    const roles = await roleLoader.load([roleLoader.watch as string])

    return roles.map((r: Role) => {
      return {
        params: {
          role: r.id,
          ...r,
        },
        frontmatter: {
          // TODO
        },
        testestest: "#### reeeeeee",
        content: "#### ugagbugaugas"
      }
    })
  }
}

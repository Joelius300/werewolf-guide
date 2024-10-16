// import { data as roles } from "../.vitepress/roleLoader.mts"
import roleLoader, { type Role } from "../.vitepress/roleLoader.mts"

function getDetailsMd(role: Role): string {
  let details =
    `# ${role.name}` +
    // TODO add badges. https://vitepress.dev/reference/default-theme-badge.
    // for styling, will have to add css https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/VPBadge.vue
    // ` ${getTeamBadgeHtml(role.team)}` +
    '\n' +
    '\n' +
    role.special;

  if (role.variations) {
    details +=
      '\n' +
      '\n' +
      '### Variationen' +
      '\n' +
      role.variations;
  }

  if (role.tips) {
    details +=
      '\n' +
      '\n' +
      '### Tipps' +
      '\n' +
      role.tips;
  }

  if (role.tipsModerator) {
    details +=
      '\n' +
      '\n' +
      '### Tipps für Moderator' +
      '\n' +
      role.tipsModerator;
  }

  return details;
}

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

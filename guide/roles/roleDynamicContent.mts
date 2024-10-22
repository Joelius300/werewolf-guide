import roleLoader, { type Role } from "./roles.data.mts"

export async function createRolesSidebar() {
  console.log("loading dynamically from " + __filename);
  const roles = await roleLoader.load();
  return roles.map((r: Role) => ({ text: r.name, link: "/roles/" + r.id }));
}

export function getDetailsMd(role: Role): string {
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

import { type Role } from "./roles.data.mts"

export function createRolesSidebar(roles: Role[]) {
  // TODO Remove these logs
  console.log("loading dynamically from " + __filename);
  return roles.map((r: Role) => ({ text: r.name, link: "/roles/" + r.id }));
}

export function getDetailsMd(role: Role): string {
  let details =
    `# ${role.name} ` +
    `<TeamBadge team="${role.team}" />` +
    '\n' +
    '\n' +
    role.special +
    '\n' +
    '\n' +
    '---';

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

import { type Role } from "./roles.data.mts"
import { slugify } from '@mdit-vue/shared'

export function createRolesSidebar(roles: Role[]) {
  return roles.map((r: Role) => ({ text: r.name, link: "/rollen/" + slugify(r.name) }));
}

export function getDetailsMd(role: Role): string {
  let details =
    "---\n" +
    `title: ${role.name}\n` +
    `id: ${role.id}\n` +
    `team: ${role.team}\n` +
    "head:\n" +
    "  - - meta\n" +
    "    - data-pagefind-meta: title\n" +
    "      property: og:title\n" +
    `      content: ${role.name}\n` +
    "---\n" +
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
      '### Varianten' +
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
      '### Tipps für Spielleitung' +
      '\n' +
      role.tipsModerator;
  }

  return details;
}

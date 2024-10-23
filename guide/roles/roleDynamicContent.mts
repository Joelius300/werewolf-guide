import { type Role } from "./roles.data.mts"

export function createRolesSidebar(roles: Role[]) {
  console.log("loading dynamically from " + __filename);
  return roles.map((r: Role) => ({ text: r.name, link: "/roles/" + r.id }));
}

export function getTeamColorType(team: string): string {
  switch (team) {
    case 'Dorf':
      return 'village';
    case 'Werwölfe':
      return 'werewolf';
    case 'Mafia':
      return 'mafia';
    case 'Einzelgänger':
      return 'lone';
    default:
      return 'info';
  }
}

function getTeamBadgeHtml(team: string): string {
  return `<Badge type="${getTeamColorType(team)}" text="${team}" />`;
}

export function getDetailsMd(role: Role): string {
  let details =
    `# ${role.name} ` +
    getTeamBadgeHtml(role.team) +
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

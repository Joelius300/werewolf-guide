import characters from '../../../assets/characters.json';

declare type Character = (typeof characters)[0];

function getTeamColorType(team: string): string {
  switch (team) {
  case 'Dorf':
    return 'village';
  case 'Werwölfe':
    return 'wolf';
  case 'Mafia':
    return 'mafia';
  case 'Einzelgänger':
    return 'lone';
  default:
    return '';
  }
}

function getTeamBadgeHtml(team: string): string {
  return `<Badge text="${team}" type="${getTeamColorType(team)}"/>`;
}

export { characters, Character, getTeamBadgeHtml };
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

/**
 * Gets a sorted copy of the characters by their name.
 * @returns A sorted copy of the characters.
 */
function getSortedCharacters(): Character[] {
  return characters.slice().sort((a, b) => a.name.localeCompare(b.name, 'de-CH'));
}

export { characters, Character, getSortedCharacters, getTeamBadgeHtml };
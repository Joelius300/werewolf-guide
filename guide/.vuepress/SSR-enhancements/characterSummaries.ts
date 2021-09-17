import { App, createPage } from 'vuepress';
import { Character, characters, getTeamBadgeHtml } from './characters';

const header = {
  lang: 'de-CH',
  title: 'Charaktere',
  description: 'Sammlung von Charakteren für Werwolf / Mafia',
};

async function createCharactersPage(app: App): Promise<void> {
  const content = characters.map(getSummary).join('\n\n');

  const charactersPage = await createPage(app, {
    path: '/rules/characterSummaries.html',
    frontmatter: header,
    content,
  });

  app.pages.push(charactersPage);
}

function getSummary(character: Character): string {
  let summary =
    `## ${character.name} ${getTeamBadgeHtml(character.team)}` +
    '\n' +
    '\n' +
    character.special;

  if (hasMoreInfo(character)) {
    summary += `\n\n<RouterLink to="/rules/characters/${character.id}.html">Tipps, Variationen, etc.</RouterLink>`;
  }

  return summary;
}

function hasMoreInfo(character: Character): boolean {
  return !!(character.tips || character.variations || character.tipsModerator);
}

export { createCharactersPage };
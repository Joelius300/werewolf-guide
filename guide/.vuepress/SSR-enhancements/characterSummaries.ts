import { App, createPage } from 'vuepress';
import { Character, characters } from './characters';

const header = {
  lang: 'de-CH',
  title: 'Charaktere',
  description: 'Sammlung von Charakteren für Werwolf / Mafia',
};

async function createCharactersPage(app: App): Promise<void> {
  const content = characters.map(getSummary).join('\n\n');

  const charactersPage = await createPage(app, {
    path: '/characters/',
    frontmatter: header,
    content,
  });

  app.pages.push(charactersPage);
}

function getSummary(character: Character): string {
  return '' +
    `## ${character.name}` +
    '\n' +
    `**Team: ${character.team}**` +
    '\n' +
    '\n' +
    character.special;
}

export { createCharactersPage };
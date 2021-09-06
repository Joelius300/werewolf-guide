import { App, createPage, PageFrontmatter } from 'vuepress';
import { Character, characters } from './characters';

async function createDetailPages(app: App): Promise<void> {
  for (const character of characters) {
    const characterPage = await createPage(app, {
      path: `/characters/${character.id}.md`,
      frontmatter: getHeader(character),
      content: getDetails(character),
    });

    app.pages.push(characterPage);
  }
}

function getHeader(character: Character): PageFrontmatter {
  return {
    lang: 'de-CH',
    title: character.name,
    description: `Regeln, Erklärungen, etc. zum Charakter ${character.name}`,
  };
}

function getDetails(character: Character): string {
  let details =
    `# ${character.name}` +
    '\n' +
    `**Team: ${character.team}**` +
    '\n' +
    '\n' +
    character.special;

  if (character.variations) {
    details +=
        '\n' +
        '\n' +
        '### Variationen' +
        '\n' +
        character.variations;
  }

  return details;
}

export { createDetailPages };
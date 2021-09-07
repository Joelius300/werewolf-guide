import { App, createPage, PageFrontmatter } from 'vuepress';
import { Character, characters } from './characters';
import type { SidebarConfigArray } from '@vuepress/theme-default';

async function createDetailPages(app: App): Promise<void> {
  for (const character of characters) {
    const characterPage = await createPage(app, {
      path: `/characters/${character.id}.html`,
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

  if (character.tips) {
    details +=
        '\n' +
        '\n' +
        '### Tipps' +
        '\n' +
        character.tips;
  }

  if (character.tipsModerator) {
    details +=
        '\n' +
        '\n' +
        '### Tipps für Moderator' +
        '\n' +
        character.tipsModerator;
  }

  return details;
}

function createDetailsSidebar(): SidebarConfigArray {
  return [
    {
      text: 'Charakter Details',
      children: characters.map((c) => `/characters/${c.id}.html`),
    },
  ];
}

export { createDetailPages, createDetailsSidebar };
import { App, createPage, PageFrontmatter } from 'vuepress';
import { Character, characters, getSortedCharacters, getTeamBadgeHtml } from './characters';
import type { SidebarConfigArray } from '@vuepress/theme-default';

async function createDetailPages(app: App): Promise<void> {
  const indexPage = await createPage(app, {
    path: '/rules/characters/',
    frontmatter: {
      lang: 'de-CH',
      title: 'Charakter-Details',
    },
    content: getIndexContent(),
  });

  app.pages.push(indexPage);

  for (const character of characters) {
    const characterPage = await createPage(app, {
      path: `/rules/characters/${character.id}.html`,
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
    editLink: false, 
  };
}

function getIndexContent(): string {
  let content = '# Charaktere\n';

  for (const character of getSortedCharacters()) {
    content += `###### <RouterLink to="${getCharacterDetailsPath(character)}">${character.name}  ${getTeamBadgeHtml(character.team)}</RouterLink>\n`;
  }

  return content;
}

function getDetails(character: Character): string {
  let details =
    `# ${character.name} ${getTeamBadgeHtml(character.team)}` +
    '\n' +
    '\n' +
    character.special;

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

function createDetailsSidebar(): SidebarConfigArray {
  return [
    {
      text: 'Charakter Details',
      children: getSortedCharacters().map(getCharacterDetailsPath),
    },
  ];
}

function getCharacterDetailsPath(character: Character): string {
  return `/rules/characters/${character.id}.html`;
}

export { createDetailPages, createDetailsSidebar, getCharacterDetailsPath };
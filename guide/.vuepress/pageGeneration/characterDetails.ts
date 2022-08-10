import { App, createPage, PageFrontmatter } from 'vuepress';
import { Character, characters, getSortedCharacters, getTeamBadgeHtml } from './characters';
import type { SidebarConfigArray, DefaultThemeNormalPageFrontmatter } from '@vuepress/theme-default';

async function createDetailPages(app: App): Promise<void> {
  const indexPage = await createPage(app, {
    path: '/rules/characters/',
    frontmatter: {
      lang: 'de-CH',
      title: 'Charakter-Details',
      editLink: false,
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

    // It's not possible to specify a path for the file AND use custom generated content.
    // Unfortunately, that means that both the git plugin and the edit link don't work.
    // One can work around the edit link issue since you can now use editLinkPattern in
    // the frontmatter of a page (https://github.com/vuepress/vuepress-next/issues/450)
    // but I've not found a way to get the git plugin to work. The reason for that is pretty simple,
    // createPage calls the hook extendsPageOptions at the very beginning, before processing the page.
    // This means that the path would have to be set before calling createPage (or at least before) extendsPageOptions
    // is invoked, otherwise extendsPageOptions of the git-plugin doesn't have a link to work with and thus won't
    // be able to gather any git information.
    // If a path were to be specified before then however, it would also be used for fetching the content, and the specified content
    // we manually put together will be ignored. Assigning paths afterwards won't work either because the git plugin was run long before.

    app.pages.push(characterPage);
  }
}

function getHeader(character: Character): DefaultThemeNormalPageFrontmatter & PageFrontmatter {
  return {
    lang: 'de-CH',
    title: character.name,
    description: `Regeln, Erklärungen, etc. zum Charakter ${character.name}`,
    editLinkPattern: ':repo/edit/:branch/assets/characters.json'
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

function getCharacterDetailsPath(character: Character) {
  return `/rules/characters/${character.id}.html`;
}

export { createDetailPages, getCharacterDetailsPath };
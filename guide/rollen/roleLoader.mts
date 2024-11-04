import { SidebarItem } from "vitepress/theme"
import matter from 'gray-matter';
import { glob } from 'tinyglobby';
import pMap from 'p-map';
import path from "node:path"
import fs from "node:fs/promises"

const guideDir = path.join(import.meta.dirname, "../.")

export async function getRolePaths() {
  /**
   * Get all the absolute paths of the markdown files containing
   * role descriptions.
   */
  const allPaths = await glob("rollen/*.md", {
    cwd: guideDir,
    absolute: true,
  });

  // manually remove index.md because of course we don't want the index page in here.
  allPaths.splice(allPaths.findIndex((p) => p.endsWith("index.md")), 1);

  return allPaths;
}

export async function parseFrontmatter(filePath: string) {
  const content = await fs.readFile(filePath, { encoding: 'utf8' });

  return matter(content);
}

export function fileToPath(filePath: string, clean?: boolean) {
  /** Returns the absolute url to a file-based route rooted at /.
   * Returns a clean link by default.
   */
  return "/" + path.relative(guideDir, filePath).replace(".md", clean === false ? ".html" : "")
}

async function pathToSidebarEntry(filePath: string): SidebarItem {
  const { data: frontmatter } = await parseFrontmatter(filePath);
  // paths must be absolute, based on root, which in this file-based routing scenario is the guide dir
  return { text: frontmatter.title, link: fileToPath(filePath) }
}

export async function createRolesSidebar() {
  const paths = await getRolePaths();
  const sidebar = await pMap(paths, pathToSidebarEntry);
  // TODO Use the lang that is currently used in Vitepress for localCompare
  sidebar.sort((a, b) => a.text.localeCompare(b.text, "de-CH"));
  return sidebar;
}

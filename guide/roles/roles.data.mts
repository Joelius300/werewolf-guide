import { defineLoader } from 'vitepress'
import fs from 'fs/promises'
import path from 'path'


export interface Role {
  id: string
  name: string
  team: string
  special: string
  variations?: string
  tips?: string
  tipsModerator?: string
}

type Data = Role[]

// these two lines are just for typing
declare const data: Data
export { data }

// relative to this loader (!)
const ASSET_PATH = '../assets/roles.json';

export default defineLoader({
  watch: ASSET_PATH,
  async load(watchedFiles?: string[]): Promise<Data> {
    let file: string;
    if (watchedFiles == null) {
      // we're loading dynamically, so by explicitly calling load()
      // and need to resolve the correct path ourself.
      file = path.join(__dirname, ASSET_PATH);
    } else {
      // we already get the correct path from the current working directory,
      // resolved by vitepress for us.
      file = path.resolve(".", watchedFiles[0]);
    }

    // const cacheBuster = `?t=${new Date().getTime()}`; // <--reloads everytime
    const stat = await fs.stat(file)
    const cacheBuster = `?t=${stat.mtime.valueOf()}`; // <-- reloads only when file changed

    const { default: roles } = await import(file + cacheBuster, { with: { type: "json" } })

    // TODO Use the lang that is currently used in Vitepress
    return roles.sort((a, b) => a.name.localeCompare(b.name, "de-CH"));
  }
})

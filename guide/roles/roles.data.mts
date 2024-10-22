import { defineLoader } from 'vitepress'
import jsonfile from 'jsonfile'
import fs from 'fs/promises'
import type { SiteConfig } from 'vitepress'
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

// these two lines are just for TypeScript
declare const data: Data
export { data }

// const config: SiteConfig = (globalThis as any).VITEPRESS_CONFIG

// relative to this loader (!)
const ASSET_PATH = '../assets/roles.json';

export default defineLoader({
  watch: ASSET_PATH,
  // TODO sort by name w.r.t. configured locale
  async load(watchedFiles?: string[]): Promise<Data> {
    // const file = watchedFiles?.[0] ?? ASSET_PATH;
    if (watchedFiles == null) {
      // we're loading dynamically, so by explicitly calling load()
      // and need to resolve the correct path ourself.
    } else {
      // we already get the correct path from the current working directory,
      // resolved by vitepress for us.
    }

    // this is how it _should_ work, so the watch path is relative
    // to the dirpath. However, sometimes the watchedFiles 
    // let file = path.join(__dirname, watchedFiles[0]);
    // console.log(__dirname);
    // console.log(path.resolve("."));
    // console.log(watchedFiles[0]);
    // const file = watchedFiles[0];
    // const file = path.join(__dirname, watchedFiles[0]);
    console.log(file);
    const cacheBuster = `?t=${new Date().getTime()}`; // <--reloads everytime
    // const stat = await fs.stat(path)
    // const cacheBuster = `?t=${stat.mtime.valueOf()}`; // <-- reloads only when file changed

    const { default: roles } = await import(file + cacheBuster, { with: { type: "json" } })

    return roles
  }
})

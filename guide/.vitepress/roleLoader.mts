import { defineLoader } from 'vitepress'

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

export default defineLoader({
  watch: ['../../assets/characters.json'],
  // TODO sort by name w.r.t. configured locale
  async load(watchedFiles): Promise<Data> {
    // TODO verify that you get the updated module, because modules
    // are usually cached after they are imported once.
    const { default: roles } = await import(watchedFiles[0], { with: { type: "json" } })

    return roles
  }
})

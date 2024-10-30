// THIS IS LEGACY, ONLY USED FOR TRANSLATING roles.json INTO MARKDOWN FILES
// execute it with deno, gotta give a lot of permissions.
// deno --allow-read --allow-sys --allow-env --allow-ffi --allow-write guide/rollen/bite-the-bullet.ts
import roleLoader, { type Role } from "./rolesJson.data.mts"
import { getDetailsMd } from "./roleDynamicContent.mts"
import { slugify } from '@mdit-vue/shared'
import fs from 'node:fs/promises'
import path from 'node:path'

const roles = await roleLoader.load();

for (const role of roles) {
  const md = getDetailsMd(role);
  const file = path.join(import.meta.dirname, slugify(role.name)) + ".md";

  await fs.writeFile(file, md);
}

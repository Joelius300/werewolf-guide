<script setup lang="ts">
import { data as roles } from "./roles.data.mts";
import { withBase } from "vitepress";
</script>

<h1>Rollen</h1>
<ul>
  <li v-for="role of roles">
    <a :href="withBase(role.url)">{{ role.frontmatter.title }} <TeamBadge :team="role.frontmatter.team" /></a>
  </li>
</ul>

<script setup lang="ts">
import { data as roles } from "./roles.data.mts";
import { getTeamColorType } from "./roleDynamicContent.mts"
</script>

<h1>Rollen</h1>
<ul>
  <li v-for="role of roles">
    <a :href="role.id">{{ role.name }} <TeamBadge :team="role.team" /></a>
  </li>
</ul>

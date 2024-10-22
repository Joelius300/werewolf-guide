<script setup>
import { data as roles } from "./roles.data.mts";
</script>

<h1>Rollen</h1>
<ul>
  <li v-for="role of roles">
    <a :href="role.id">{{ role.name }}</a>
  </li>
</ul>

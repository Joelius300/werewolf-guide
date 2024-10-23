---
lang: de-CH
title: Rollen
description: Rollen für Werwolf / Mafia im Überblick
---

<script setup lang="ts">
import { data as roles, type Role } from "../roles/roles.data.mts";
import { getTeamColorType } from "../roles/roleDynamicContent.mts";
import { withBase } from "vitepress";

const hasMoreInfo = (role: Role) => !!(role.tips || role.variations || role.tipsModerator);
const getRolePath = (role: Role) => withBase(`/roles/${role.id}`);
</script>

<h1>Rollen im Überblick</h1>
<div v-for="role of roles">
  <h2>{{role.name}} <TeamBadge :team="role.team" /></h2>
  <p>{{role.special}}</p>
  <a v-if="hasMoreInfo(role)" :href="getRolePath(role)">Tipps, Varianten, etc.</a>
</div>

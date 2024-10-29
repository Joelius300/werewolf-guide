---
lang: de-CH
title: Rollen
description: Rollen für Werwolf / Mafia im Überblick
---

<script setup lang="ts">
import { data as roles, type RenderedRole as Role } from "./renderedRoles.data.mts";
import { getTeamColorType } from "../rollen/roleDynamicContent.mts";
import { slugify } from '@mdit-vue/shared'
import { withBase } from "vitepress";

const hasMoreInfo = (role: Role) => !!(role.tips || role.variations || role.tipsModerator);
const getRolePath = (role: Role) => withBase(`/rollen/${slugify(role.name)}`);
</script>

# Rollen im Überblick

Die Beschreibungen unterhalb erklären die Fähigkeiten und Motivationen der verschiedenen Rollen. Die Spielleitung wählt vor dem Spiel alle zu verwendenden Rollen aus und muss darauf achten, dass die Teams ungefähr gleich stark sind (Faustregel: halb so viele Werwölfe wie Dorf).

::: details Bemerkung zu Geschlechtsformen
Es ist erwähnenswert, dass die Rollennamen häufig nur in einer Geschlechtsform geschrieben sind (derselben wie im Werwölfe von Düsterwald). Wo möglich, werden geschlechtsneutrale Formen verwendet, doch meiner Erfahrung nach, passiert es beim moderieren häufig, dass man versehentlich das Geschlecht einer Person durch die Rollenbezeichnung verrät, wenn man versucht die Formen zu variieren. Aus diesem Grund wähle ich für jede Rolle jeweils eine Form und verwende diese _immer_. Findet heraus, was für euch am besten funktioniert, die Namen sind überhaupt nicht fix und können problemlos angepasst werden (übrigens auch für eine thematische Einkleidung, falls man mal ein Alien-Mafia spielen möchte).
:::

<div v-for="role of roles">
  <h2>{{role.name}} <TeamBadge :team="role.team" /></h2>
  <div v-html="role.renderedSpecial" />
  <a v-if="hasMoreInfo(role)" :href="getRolePath(role)">Tipps, Varianten, etc.</a>
</div>

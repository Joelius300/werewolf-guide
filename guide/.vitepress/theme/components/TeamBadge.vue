<script setup lang="ts">
// import { Badge } from 'vitepress/theme';

interface Props {
  team: string;
}

defineProps<Props>();

const getTeamColorType = (team: string): string => {
  switch (team) {
    case "Dorf":
      return "village";
    case "Werwölfe":
      return "werewolf";
    case "Mafia":
      return "mafia";
    case "Einzelgänger":
      return "lone";
    default:
      return "info";
  }
};
</script>

<template>
  <Badge :type="getTeamColorType(team)" :text="team" />
</template>

<template>
  
</template>

<script lang="ts">
import { defineComponent, ref, watch, onBeforeMount } from 'vue';
import { get as getIDB, set as setIDB } from 'idb-keyval';
import { characters, Character } from '../pageGeneration/characters';

const key = 'roster';

/* Either do it index based but 
 * that has the drawback that people can't change
 * places and also adding and removing people isn't
 * intuitive. So working with names is better but more
 * work for the moderator. You could use this for reordering the
 * players: https://github.com/SortableJS/vue.draggable.next
 */

export default defineComponent({
  setup() {
    const roster = ref(characters.map((c: Character) => { id: c.id, count: 0 }));

    // onBeforeMount(async () => counter.value = await getIDB<number>(key) ?? 0);
    // watch(() => counter.value, c => setIDB(key, c));

    return {
      roster,
    };
  },
});
</script>

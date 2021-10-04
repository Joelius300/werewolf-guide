<template>
  <button v-on:click="counter += 1">{{ counter }}</button>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onBeforeMount } from 'vue';
import { get as getIDB, set as setIDB } from 'idb-keyval';

export default defineComponent({
  /* props: {
    startValue: Number,
  }, */
  setup() {
    // const counter = ref(props.startValue);
    const key = 'test_counter';
    const counter = ref(0);

    onBeforeMount(async () => counter.value = await getIDB<number>(key) ?? 0);

    watch(() => counter.value, c => setIDB(key, c));

    return {
      counter,
    };
  },
});
</script>

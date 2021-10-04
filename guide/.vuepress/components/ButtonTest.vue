<template>
  <button v-on:click="counter += 1">{{ counter }}</button>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onBeforeMount } from 'vue';

export default defineComponent({
  /* props: {
    startValue: Number,
  }, */
  setup() {
    // const counter = ref(props.startValue);
    const key = 'test_counter';
    const counter = ref(0);

    onBeforeMount(() => counter.value = +localStorage.getItem(key));

    watch(() => counter.value, c => localStorage.setItem(key, c.toString()));

    return {
      counter,
    };
  },
});
</script>

<template>
  <button v-on:click="counter += 1">{{ counter }}</button>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  /* props: {
    startValue: Number,
  }, */
  setup() {
    // const counter = ref(props.startValue);
    const init = +localStorage.getItem('test_counter');

    const counter = ref(init);
    watch(() => counter.value, c => localStorage.setItem('test_counter', c.toString()));

    return {
      counter,
    };
  },
});
</script>

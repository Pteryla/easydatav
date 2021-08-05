<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  setup() {
    console.log("The App setup function");
    const store = useStore(key);
    const count = computed(() => store.state.count);
    console.log(store.state.todo?.todos);
    console.log(store);
    return {
      count,
    };
  },
  mounted() {
    console.log("The App has been mounted");
    console.log(this.$store.state);
  },
});
</script>

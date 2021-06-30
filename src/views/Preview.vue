<template>
  <div class="Preview">
    <Screen></Screen>
  </div>
</template>

<script>
// @ is an alias to /src
import Screen from '@/components/commonComponents/Screen.vue';
export default {
  name: 'Preview',
  components: {
    Screen,
  },
  beforeUnmount() {
    this.$store.commit('workbench/setVisitMode', 'Edit');
  },
};
</script>

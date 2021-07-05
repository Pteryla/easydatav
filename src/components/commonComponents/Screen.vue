<template>
  <div class="Screen">
    <Shape
      v-for="item in componentsData"
      :key="item.id"
      :componentData="item"
      :currentComponentData="currentComponentData"
      :containerStyle="item.componentStyle.containerStyle"
    >
      {{ JSON.stringify(item) }}
    </Shape>
  </div>
</template>

<script>
// 导入拖拽组件
const path = require('path');
const _Components = {};
const files = require.context('@/components/screenComponents', true, /\.vue$/);
files.keys().forEach(key => {
  const name = path.basename(key, '.vue');
  _Components[name] = files(key).default || files(key);
});

import { mapState } from 'vuex';
import Shape from './Shape.vue';
export default {
  name: 'Screen',
  components: { Shape, ..._Components },
  setup() {},
  data() {
    return {};
  },
  created() {},
  beforeMount() {},
  mounted() {
    console.log(this.currentScene);
  },
  unmounted() {},
  watch: {},
  computed: {
    ...mapState({
      currentScene: state => state.workbench.currentScene,
      componentsData: state => state.workbench.currentScene.componentsData,
      currentComponentData: state => state.workbench.currentComponentData,
    }),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.Screen {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>

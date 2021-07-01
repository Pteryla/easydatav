<template>
  <div class="Screen">
    <Shape> <EdvBarChart1></EdvBarChart1></Shape>

    <el-tooltip content="Top center" placement="top">
      <el-button>Dark</el-button>
    </el-tooltip>
    <el-tooltip content="Bottom center" placement="bottom" effect="light">
      <el-button>Light</el-button>
    </el-tooltip>
  </div>
</template>

<script>
import Shape from '../commonComponents/Shape';

const path = require('path');
const _Components = {};
const files = require.context('@/components/screenComponents', true, /\.vue$/);
files.keys().forEach(key => {
  const name = path.basename(key, '.vue');
  _Components[name] = files(key).default || files(key);
});

export default {
  name: 'Screen',
  components: { Shape, ..._Components },
  setup() {},
  data() {
    return {};
  },
  created() {},
  beforeMount() {},
  mounted() {},
  unmounted() {},
  watch: {},
  computed: {},
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

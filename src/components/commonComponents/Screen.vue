<template>
  <div class="Screen">
    <el-tooltip content="Top center" placement="top">
      <el-button>Dark</el-button>
    </el-tooltip>
    <el-tooltip content="Bottom center" placement="bottom" effect="light">
      <el-button>Light</el-button>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: 'Screen',
  components: {},
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
}
</style>

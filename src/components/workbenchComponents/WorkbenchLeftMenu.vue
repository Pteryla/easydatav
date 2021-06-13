<template>
  <div class="WorkbenchLeftMenu">
    <el-tabs v-model="activeLeftTabName" type="card" @tab-click="handleRightTabClick">
      <el-tab-pane label="组件" name="components">
        <Components></Components>
      </el-tab-pane>
      <el-tab-pane label="图层" name="layers">
        <Layers></Layers>
      </el-tab-pane>
      <el-tab-pane label="场景" name="scenery">
        <Scenery></Scenery>
      </el-tab-pane>
      <el-tab-pane label="模板" name="templates">
        <Templates></Templates>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Components from './lefttTabMenus/Components';
import Layers from './lefttTabMenus/Layers';
import Scenery from './lefttTabMenus/Scenery';
import Templates from './lefttTabMenus/Templates';
export default {
  name: 'WorkbenchLeftMenu',
  components: { Templates, Scenery, Layers, Components },
  setup() {},
  data() {
    return {
      activeLeftTabName: 'components',
    };
  },
  created() {},
  beforeMount() {},
  mounted() {},
  unmounted() {},
  watch: {},
  computed: {},
  methods: {
    handleRightTabClick() {},
  },
};
</script>

<style lang="scss" scoped>
.WorkbenchLeftMenu {
  width: 100%;
  height: 100%;
  :deep().el-tabs {
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;

    .el-tabs__header {
      border-bottom: 0px solid #505050;
      background-color: rgb(32, 32, 32);
      margin: 0;
      cursor: pointer;
    }

    .el-tabs__nav {
      width: 100%;
      border: 0px;
      display: flex;
    }

    .el-tabs__item {
      user-select: none;
      width: 100%;
      color: rgb(129, 129, 129);
      text-align: center;
      border: 0;
      font-size: $font-size-base;
      box-sizing: border-box;
    }

    .el-tabs__item.is-active {
      color: #c7c7c7;
      border-bottom: 1px solid #3f3f3f;
      background-color: #181818;
    }

    .el-tabs__content {
      width: 100%;
      height: 100%;

      .el-tab-pane {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

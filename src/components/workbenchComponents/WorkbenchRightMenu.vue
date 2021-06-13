<template>
  <div class="WorkbenchRightMenu">
    <el-tabs v-model="activeRightTabName" type="card" @tab-click="handleRightTabClick">
      <el-tab-pane label="样式" name="style">
        <Style></Style>
      </el-tab-pane>
      <el-tab-pane label="数据" name="data">
        <Data></Data>
      </el-tab-pane>
      <el-tab-pane label="事件" name="events">
        <Events></Events>
      </el-tab-pane>
      <el-tab-pane label="任务" name="tasks">
        <Tasks></Tasks>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Style from './rightTabMenus/Style';
import Data from './rightTabMenus/Data';
import Events from './rightTabMenus/Events';
import Tasks from './rightTabMenus/Tasks';
export default {
  name: 'WorkbenchRightMenu',
  components: { Tasks, Events, Style, Data },
  setup() {},
  data() {
    return {
      activeRightTabName: 'style',
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
.WorkbenchRightMenu {
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

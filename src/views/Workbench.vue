<!--suppress ALL -->
<template>
  <div class="workbench">
    <el-container>
      <el-header height="60px">
        <workbench-header></workbench-header>
      </el-header>
      <el-container>
        <el-aside width="270px">
          <workbench-left-menu></workbench-left-menu>
        </el-aside>
        <el-main>
          <workbench-screen></workbench-screen>
        </el-main>
        <el-aside width="270px">
          <workbench-right-menu></workbench-right-menu>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import WorkbenchHeader from '../components/workbenchComponents/WorkbenchHeader';
import WorkbenchRightMenu from '../components/workbenchComponents/WorkbenchRightMenu';
import WorkbenchLeftMenu from '../components/workbenchComponents/WorkbenchLeftMenu';
import WorkbenchScreen from '../components/workbenchComponents/WorkbenchScreen';
export default {
  name: 'Workbench',
  components: {
    WorkbenchScreen,
    WorkbenchLeftMenu,
    WorkbenchRightMenu,
    WorkbenchHeader,
  },
  setup() {},
  data() {
    return {};
  },
  created() {},
  beforeMount() {},
  mounted() {},
  unmounted() {},
  watch: {},
  computed: {
    ...mapState({
      screen: state => state.workbench.screen,
    }),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.workbench {
  width: 100%;
  height: 100%;
  min-width: 980px;
  color: whitesmoke;
  font-size: $font-size-base;

  .el-container {
    width: 100%;
    height: 100%;
  }

  .el-header {
    padding: 0;
    border-bottom: 1px solid rgb(0, 0, 0);
    user-select: none;
    box-sizing: border-box;
    background-color: $background-color-main;
  }

  .el-aside {
    background-color: #292929;
  }

  .el-main {
    background-color: #333;
    padding: 0;
    overflow: hidden;
    box-sizing: border-box;
    border-left: 1px solid rgb(0, 0, 0);
    border-right: 1px solid rgb(0, 0, 0);
  }
}
</style>

<template>
  <div class="workbench">
    <el-container>
      <el-header height="60px">
        <e-logo></e-logo>
        <div class="workbench-controllers">
          <el-button type="primary" size="mini">
            <i class="el-icon-refresh-left"></i>
            撤销</el-button
          >
          <el-button type="primary" size="mini">
            <i class="el-icon-refresh-right"></i>
            恢复</el-button
          >
          <el-button type="primary" size="mini">
            <i class="el-icon-finished"></i>
            保存</el-button
          >
          <el-button type="primary" size="mini">
            <i class="el-icon-monitor"></i>
            预览</el-button
          >
          <el-button type="primary" size="mini">
            <i class="el-icon-s-promotion"></i>
            发布</el-button
          >
          <el-button type="primary" size="mini">
            <i class="el-icon-switch-button"></i>
            退出</el-button
          >
        </div>
      </el-header>
      <el-container>
        <el-aside width="260px">
          <el-tabs v-model="activeRightTabName" type="card" @tab-click="handleRightTabClick">
            <el-tab-pane label="图层" name="layers"></el-tab-pane>
            <el-tab-pane label="组件" name="components"></el-tab-pane>
            <el-tab-pane label="场景" name="scenery"></el-tab-pane>
            <el-tab-pane label="模板" name="templates"></el-tab-pane>
          </el-tabs>
        </el-aside>
        <el-main>
          <div class="ieasydatav—workbench" id="ieasydatav—workbench">
            <div class="scale-rulers">
              <div class="ruler-top">
                <div
                  class="ruler-top-item"
                  :style="{ width: rulerUnit + 'px' }"
                  v-for="(item, index) in rulerTopItemList"
                  :key="index"
                >
                  <p>{{ item }}</p>
                </div>
              </div>
              <div class="ruler-left">
                <div
                  class="ruler-left-item"
                  :style="{ height: rulerUnit + 'px' }"
                  v-for="(item, index) in rulerLeftItemList"
                  :key="index"
                >
                  <p>{{ item }}</p>
                </div>
              </div>
            </div>
          </div>
        </el-main>
        <el-aside width="260px"
          ><el-tabs v-model="activeLeftTabName" type="card" @tab-click="handleRightTabClick">
            <el-tab-pane label="样式" name="style"></el-tab-pane>
            <el-tab-pane label="数据" name="data"></el-tab-pane>
            <el-tab-pane label="事件" name="events"></el-tab-pane>
            <el-tab-pane label="任务" name="tasks"></el-tab-pane>
          </el-tabs>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ELogo from '@/components/commonComponents/ELogo.vue';
export default {
  name: 'Workbench',
  components: {
    ELogo,
  },
  setup() {},
  data() {
    return {
      activeRightTabName: '',
      activeLeftTabName: '',
      screenSizeRatio: 100,
      rulerUnit: 100,
      rulerTopItemList: [],
      rulerLeftItemList: [],
    };
  },
  created() {},
  beforeMount() {},
  mounted() {
    this.setScaleRulers();
    console.log(this.rulerTopItemList);
    console.log(this.rulerLeftItemList);
  },
  unmounted() {},
  watch: {},
  computed: {},
  methods: {
    handleRightTabClick() {},
    setScaleRulers() {
      this.rulerTopItemList = [];
      this.rulerLeftItemList = [];
      let ieasydatavWorkbench = document.getElementById('ieasydatav—workbench');
      if (ieasydatavWorkbench) {
        let { scrollHeight, scrollWidth } = ieasydatavWorkbench;
        let unit_top = Math.ceil((scrollHeight - 20) / this.rulerUnit);
        let unit_left = Math.ceil((scrollWidth - 20) / this.rulerUnit);
        for (let i = 0; i <= unit_top + 10; i++) {
          this.rulerTopItemList.push(Math.round(i * this.rulerUnit * (100 / this.screenSizeRatio)));
        }
        for (let i = 0; i <= unit_left + 10; i++) {
          this.rulerLeftItemList.push(Math.round(i * this.rulerUnit * (100 / this.screenSizeRatio)));
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.workbench {
  width: 100%;
  height: 100%;
  color: whitesmoke;
  font-size: $font-size-base;

  .el-container {
    width: 100%;
    height: 100%;
  }
  .el-header {
    background-color: $background-color-main;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .el-button {
      border-radius: 2px;
      color: #dddddd;
      border: 0;
      background-color: #333;
      &:hover {
        background: linear-gradient(90deg, #01a3a8, #007ec7);
        color: white;
      }
    }
  }
  .el-aside {
    background-color: #292929;
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
      }
      .el-tabs__nav {
        width: 100%;
        border: 0px;
        display: flex;
      }
      .el-tabs__item {
        width: 100%;
        color: rgb(129, 129, 129);
        text-align: center;
        border: 0px;
        font-size: $font-size-base;
        box-sizing: border-box;
        border-bottom: 0px;
      }
      .el-tabs__item.is-active {
        color: #dadada;
        border-bottom: 2px solid #cccccc;
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
  .el-main {
    background-color: #333;
    padding: 0;
    overflow: hidden;
    .ieasydatav—workbench {
      width: 100%;
      height: 100%;
      position: relative;
      .scale-rulers {
        position: relative;
        .ruler-top {
          cursor: pointer;
          position: absolute;
          z-index: 10;
          height: 20px;
          // background-color: $scale-rulers-background-color;
          top: 0px;
          left: 20px;
          display: flex;
          .ruler-top-item {
            flex-shrink: 0;
            height: 20px;
            pointer-events: none;
            text-align: left;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-image: repeating-linear-gradient(90deg, #999 0, #999 1px, transparent 0, transparent 100%),
              repeating-linear-gradient(90deg, #999 0, #999 1px, transparent 0, transparent 100%),
              repeating-linear-gradient(90deg, #999 0, #999 1px, transparent 0, transparent 10%),
              -webkit-gradient(linear, left top, left bottom, from(#000), to(#000));
            background-image: repeating-linear-gradient(90deg, #303133 0, #606266 1px, transparent 0, transparent 100%),
              repeating-linear-gradient(90deg, #606266 0, #303133 1px),
              repeating-linear-gradient(90deg, #303133 0px, #606266 1px, transparent 0, transparent 5%),
              linear-gradient($scale-rulers-background-color, $scale-rulers-background-color);
            background-position: 0em 100%, 50% 100%, 0 100%, 0 0, 0 0;
            background-size: 100% 100%, 1px 53%, 100% 3px, 100% 100%, 100% 100%;
            background-repeat: no-repeat;
            & p {
              margin: 0;
              padding: 0;
              transform: scale(0.8);
              font-size: 12px;
              transform-origin: 0% 0%;
              margin-left: 5px;
              margin-top: 5px;
            }
          }
        }
        .ruler-left {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          position: absolute;
          width: 20px;
          z-index: 10;
          background-color: $scale-rulers-background-color;
          top: 20px;
          left: 0px;
          .ruler-left-item {
            flex-shrink: 0;
            width: 20px;
            position: relative;
            pointer-events: none;
            text-align: right;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-image: repeating-linear-gradient(180deg, #999 0px, #999 1px, transparent 0px, transparent 45%),
              repeating-linear-gradient(180deg, #999 0, #999 0px, transparent 0, transparent 50%),
              repeating-linear-gradient(180deg, #999 0px, #999 1px, transparent 0, transparent 10%),
              -webkit-gradient(linear, left top, left bottom, from(#000), to(#000));
            background-image: repeating-linear-gradient(
                180deg,
                #606266 0px,
                #606266 1px,
                transparent 0px,
                transparent 45%
              ),
              repeating-linear-gradient(180deg, #606266 0, #606266 1px, transparent 0, transparent 50%),
              repeating-linear-gradient(180deg, #606266 0px, #606266 1px, transparent 0, transparent 5%),
              linear-gradient($scale-rulers-background-color, $scale-rulers-background-color);
            background-position: 0px 0px, 0px 100%, 0px 100%, 0px 0px, 0px 0px;
            background-size: 100% 284%, 40% 100%, 2px 100%, 100% 100%, 100% 100%;
            background-repeat: no-repeat;

            & p {
              margin: 0;
              font-size: 12px;
              padding: 0;
              transform: rotate(90deg) scale(0.8);
              text-align: left;
              user-select: none;
              transform-origin: 0 33%;
              margin-left: 16px;
            }
          }
        }
      }
    }
  }
}
</style>

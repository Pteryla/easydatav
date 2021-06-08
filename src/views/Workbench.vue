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
            <div class="screen-container">
              <div class="screen-wrapper">
                <div class="screen">haha</div>
              </div>
            </div>
          </div>
        </el-main>
        <el-aside width="270px">
          <workbench-right-menu></workbench-right-menu>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import WorkbenchHeader from "../components/workbenchComponents/WorkbenchHeader";
import WorkbenchRightMenu from "../components/workbenchComponents/WorkbenchRightMenu";
import WorkbenchLeftMenu from "../components/workbenchComponents/WorkbenchLeftMenu";
export default {
  name: 'Workbench',
  components: {
    WorkbenchLeftMenu,
    WorkbenchRightMenu,
    WorkbenchHeader,

  },
  setup() {
  },
  data() {
    return {
      screenSizeRatio: 100,
      rulerUnit: 100,
      rulerTopItemList: [],
      rulerLeftItemList: [],

    };
  },
  created() {

  },
  beforeMount() {
  },
  mounted() {
    this.setScaleRulers();
    console.log(this.rulerTopItemList);
    console.log(this.rulerLeftItemList);
  },
  unmounted() {
  },
  watch: {},
  computed: {
    ...mapState({
      screen: state => state.workbench.screen
    })
  },
  methods: {


    setScaleRulers() {
      this.rulerTopItemList = [];
      this.rulerLeftItemList = [];
      let ieasydatavWorkbench = document.getElementById('ieasydatav—workbench');
      if (ieasydatavWorkbench) {
        let {scrollHeight, scrollWidth} = ieasydatavWorkbench;
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
            background-image: repeating-linear-gradient(90deg, #606266 0, #606266 1px, transparent 0, transparent 100%),
            repeating-linear-gradient(90deg, #606266 0, #606266 1px),
            repeating-linear-gradient(90deg, #606266 0px, #606266 1px, transparent 0, transparent 5%),
            linear-gradient($scale-rulers-background-color, $scale-rulers-background-color);
            background-position: 0em 100%, 50% 100%, 0 100%, 0 0, 0 0;
            background-size: 100% 100%, 1px 53%, 100% 3px, 100% 100%, 100% 100%;
            background-repeat: no-repeat;

            & p {
              padding: 0;
              transform: scale(0.8);
              font-size: 12px;
              transform-origin: 0 0;
              margin: 5px 0 0 5px;
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
            background-position: 0 0, 100% 100%, 100% 100%, 0 0, 0 0;
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
              margin-left: 10px;
            }
          }
        }
      }

      .screen-container {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: auto;

        &::-webkit-scrollbar {
          z-index: 0 !important;
          width: 2px;
          height: 2px;
          background-color: #141517;
        }

        &::-webkit-scrollbar-corner {
          z-index: 0;
          background-color: #141517;
        }

        &::-webkit-scrollbar-thumb {
          width: 2px;
          height: 2px;
          z-index: 0 !important;
          background-color: #909399;
        }

        .screen-wrapper {
          position: absolute;
          top: 20px;
          left: 20px;
          padding-bottom: 20px;
          padding-right: 20px;

          .screen {
            width: 1000px;
            height: 500px;
            background-color: rgb(159, 164, 170);
          }
        }
      }
    }
  }
}
</style>

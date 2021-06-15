<template>
  <div class="WorkbenchHeader">
    <e-logo></e-logo>
    <div class="workbench-controllers">
      <div class="operators">
        <el-tooltip content="撤销" :enterable="false" placement="bottom">
          <el-button type="primary" size="mini">
            <i class="el-icon-back"></i>
          </el-button>
        </el-tooltip>
        <el-tooltip content="重做" :enterable="false" placement="bottom">
          <el-button type="primary" size="mini">
            <i class="el-icon-right"></i>
          </el-button>
        </el-tooltip>
        <el-tooltip :content="isFullScreen === true ? '退出全屏' : '全屏'" :enterable="false" placement="bottom">
          <el-button type="primary" size="mini" @click="toggleFullscreen">
            <i :class="isFullScreen === true ? 'el-icon-copy-document' : 'el-icon-full-screen'"></i>
          </el-button>
        </el-tooltip>
        <el-button type="primary" size="mini">保存</el-button>
      </div>
      <div class="screen-controller">
        <span @click="makeScreenPositionCenter">屏幕尺寸</span
        ><span><el-input size="mini" v-model="screenInfo.width" placeholder=""></el-input></span> <span>x</span
        ><span
          ><el-input size="mini" v-model="screenInfo.height" placeholder=""></el-input>
          <span>Px</span>
        </span>
        <span>
          <el-button type="primary" @click="screenInfo.ratio < 200 ? (screenInfo.ratio += 5) : ''" size="mini">
            <i class="el-icon-zoom-in"></i> </el-button
        ></span>
        <span> <el-input size="mini" v-model="screenInfo.ratio" placeholder=""></el-input><span>%</span> </span>
        <span>
          <el-button type="primary" @click="screenInfo.ratio > 30 ? (screenInfo.ratio -= 5) : ''" size="mini">
            <i class="el-icon-zoom-out"></i> </el-button
        ></span>
      </div>
      <div class="controllers">
        <el-button type="primary" size="mini">
          <i class="el-icon-monitor"></i>
          预览
        </el-button>
        <el-button type="primary" size="mini">
          <i class="el-icon-s-promotion"></i>
          发布
        </el-button>
        <el-button type="primary" size="mini">
          <i class="el-icon-switch-button"></i>
          退出
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import screenfull from 'screenfull';
import ELogo from '../commonComponents/ELogo';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'WorkbenchHeader',
  components: { ELogo },
  setup() {},
  data() {
    return {
      screenInfo: {
        width: 0,
        height: 0,
        ratio: 0,
      },
      isFinishedInit: false,
      isFullScreen: false,
    };
  },
  created() {
    this.init();
  },
  beforeMount() {},
  mounted() {},
  unmounted() {},
  watch: {
    screenInfo: {
      deep: true,
      handler: function (newScreenInfo) {
        if (this.isFinishedInit) {
          this['workbench/setScreenSize']({
            width: newScreenInfo.width,
            height: newScreenInfo.height,
          });
          this['workbench/setScreenSizeRatio']({
            widthRatio: newScreenInfo.ratio,
            heightRatio: newScreenInfo.ratio,
          });
        }
      },
    },
  },
  computed: {
    ...mapState({
      screen: state => state.workbench.screen,
    }),
  },
  methods: {
    ...mapMutations(['workbench/setScreenSize', 'workbench/setScreenSizeRatio']),
    init() {
      let { size, sizeRatio } = this.screen;
      this.screenInfo.width = size.width;
      this.screenInfo.height = size.height;
      this.screenInfo.ratio = sizeRatio.widthRatio;
      this.isFinishedInit = true;
    },
    toggleFullscreen() {
      let targetDom = document.getElementById('workbench');
      screenfull.toggle(targetDom);
      this.isFullScreen = !this.isFullScreen;
    },
    makeScreenPositionCenter() {
      let ieasydatavDom = document.getElementById('ieasydatav—workbench');
      if (ieasydatavDom) {
        console.log(ieasydatavDom);
        // let { offsetWidth, offsetHeight } = ieasydatavDom;
        // console.log(`offsetWidth:${} ${}`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.WorkbenchHeader {
  width: 100%;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .workbench-controllers {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .operators {
      margin-left: 40px;

      .el-button {
        font-size: 12px;
      }

      .el-icon-back {
        font-size: 14px;
        font-weight: bold;
      }

      .el-icon-right {
        font-size: 14px;
        font-weight: bold;
      }
    }

    .screen-controller {
      display: flex;
      align-items: center;
      user-select: none;

      .el-icon-zoom-in {
        font-size: 14px;
        font-weight: bold;
      }

      .el-icon-zoom-out {
        font-size: 14px;
        font-weight: bold;
      }

      .el-input {
        width: 50px;
      }

      .el-button {
        padding: 0 10px;
      }

      span {
        color: #bdbdbd;
        height: 28px;
        line-height: 28px;
        margin: 0 5px;
      }

      :deep() input {
        color: #bdbdbd;
        height: 24px;
        padding: 0 4px;
        background-color: $background-color-main;
        border-collapse: collapse;
        text-align: center;
        border-radius: 4px;
        border: 1px solid #2a2a2a;

        &:hover {
          border: 1px solid #936eff;
        }

        &:focus {
          border: 1px solid #ac60ff;
        }
      }
    }
    @media screen and (max-width: 1000px) {
      .screen-controller {
        display: none;
      }
    }
  }

  .el-button {
    border-radius: 2px;
    color: #bdbdbd;
    border: 0;
    background: $background-color-main;

    &:hover {
      background: linear-gradient(90deg, #6557d8, #a628d3);
      color: #e9e9e9;
    }

    &:active {
      background: linear-gradient(90deg, #796bf8, #ca45fa);
    }
  }
}
</style>

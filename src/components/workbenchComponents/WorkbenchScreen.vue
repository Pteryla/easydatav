<template>
  <div class="WorkbenchScreen">
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
        <div class="ruler-show-controller">
          <i class="el-icon-view"></i>
        </div>
      </div>
      <div class="screen-container">
        <div class="screen-wrapper" @mousedown="handleScreenMove($event)" :style="screenWrapperPosition">
          <Screen :style="screenStyle"></Screen>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Screen from '@/components/commonComponents/Screen.vue';
export default {
  name: 'WorkbenchScreen',
  components: {
    Screen,
  },
  setup() {},
  data() {
    return {
      screenSizeRatio: 100,
      rulerUnit: 100,
      rulerTopItemList: [],
      rulerLeftItemList: [],
      screenWrapperPosition: {},
      screenStyle: {},
    };
  },
  created() {
    this.setScreenStyle();
  },
  beforeMount() {},
  mounted() {
    this.setScaleRulers();
  },
  unmounted() {},
  watch: {
    screen: {
      deep: true,
      handler: function () {
        this.setScreenStyle();
      },
    },
  },
  computed: {
    ...mapState({
      screen: state => state.workbench.screen,
    }),
  },
  methods: {
    ...mapMutations(['set_screenPosition']),
    setScaleRulers() {
      this.rulerTopItemList = [];
      this.rulerLeftItemList = [];
      let ieasydatavDom = document.getElementById('ieasydatav—workbench');
      if (ieasydatavDom) {
        let { scrollHeight, scrollWidth } = ieasydatavDom;
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
    handleScreenMove(e) {
      const startY = e.clientY;
      const startX = e.clientX;
      const startTop = parseInt(this.screenWrapperPosition.top);
      const startLeft = parseInt(this.screenWrapperPosition.left);
      let move = moveEvent => {
        const currX = moveEvent.clientX;
        const currY = moveEvent.clientY;
        this.set_screenPosition({
          left: currX - startX + startLeft,
          top: currY - startY + startTop,
        });
      };
      const up = () => {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
      };
      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', up);
    },
    setScreenStyle() {
      this.screenWrapperPosition.left = this.screen.position.left + 'px';
      this.screenWrapperPosition.top = this.screen.position.top + 'px';
      this.screenStyle.width = Math.round((this.screen.size.width * this.screen.sizeRatio.widthRatio) / 100) + 'px';
      this.screenStyle.height = Math.round((this.screen.size.height * this.screen.sizeRatio.heightRatio) / 100) + 'px';
      this.screenStyle.backgroundColor = this.screen.backgroundColor;
    },
  },
};
</script>

<style lang="scss" scoped>
.WorkbenchScreen {
  width: 100%;
  height: 100%;
  .ieasydatav—workbench {
    width: 100%;
    height: 100%;
    position: relative;
    .scale-rulers {
      position: relative;
      .ruler-show-controller {
        width: 20px;
        height: 20px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        i {
          width: 20px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          background-color: $scale-rulers-background-color;
        }
      }
      .ruler-top {
        cursor: pointer;
        position: absolute;
        z-index: 10;
        height: 20px;
        top: 0;
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

          background-image: repeating-linear-gradient(
              90deg,
              #606266 0px,
              #606266 1px,
              transparent 0px,
              transparent 100%
            ),
            repeating-linear-gradient(90deg, #606266 0, #606266 1px, transparent 0, transparent 0%),
            repeating-linear-gradient(90deg, #606266 0px, #606266 1px, transparent 0, transparent 5%),
            linear-gradient($scale-rulers-background-color, $scale-rulers-background-color);
          background-position: 0 100%, 50.5% 100%, 0 100%, 0 0, 0 0;
          background-size: 100% 100%, 1px 40%, 100% 2px, 100% 100%, 100% 100%;
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
      }
    }
  }
}
</style>

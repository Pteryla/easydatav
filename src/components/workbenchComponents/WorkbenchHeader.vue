<template>
  <div class="WorkbenchHeader">
    <e-logo></e-logo>
    <div class="workbench-controllers">
      <div class="operators">
        <el-button type="primary" size="mini">
          <i class="el-icon-back"></i>
        </el-button>
        <el-button type="primary" size="mini">
          <i class="el-icon-right"></i>
        </el-button>
        <el-button type="primary" size="mini"> 保存</el-button>
      </div>
      <div class="screen-controller">
        <span>屏幕尺寸</span><span><el-input size="mini" v-model="screenInfo.width" placeholder=""></el-input></span>
        <span>x</span
        ><span
      ><el-input size="mini" v-model="screenInfo.height" placeholder=""></el-input>
              <span>Px</span>
            </span>
        <span>
              <el-button type="primary" size="mini"> <i class="el-icon-zoom-in"></i> </el-button
              ></span>
        <span> <el-input size="mini" v-model="screenInfo.ratio" placeholder=""></el-input><span>%</span> </span>
        <span>
              <el-button type="primary" size="mini"> <i class="el-icon-zoom-out"></i> </el-button
              ></span>
      </div>
      <div class="controllers">
        <el-button type="primary" size="mini">
          <i class="el-icon-monitor"></i>
          预览
        </el-button
        >
        <el-button type="primary" size="mini">
          <i class="el-icon-s-promotion"></i>
          发布
        </el-button
        >
        <el-button type="primary" size="mini">
          <i class="el-icon-switch-button"></i>
          退出
        </el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import ELogo from "../commonComponents/ELogo";

export default {
  name: 'WorkbenchHeader',
  components: {ELogo},
  setup() {
  },
  data() {
    return {
      screenInfo: {
        width: 100,
        height: 100,
        ratio: 100,
      },
    };
  },
  created() {
  },
  beforeMount() {
  },
  mounted() {
  },
  unmounted() {
  },
  watch: {},
  computed: {},
  methods: {},
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
        font-weight: bold;
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

      span {
        margin: 0 5px;
      }

      :deep() input {
        color: #ffffff;
        height: 24px;
        padding: 0 4px;
        background-color: $background-color-main;
        border-collapse: collapse;
        text-align: center;
        border-radius: 4px;
        border: 1px solid #2a2a2a;

        &:hover {
          border: 1px solid #5f54be;
        }

        &:focus {
          border: 1px solid #5f54be;
        }
      }
    }
  }

  .el-button {
    border-radius: 2px;
    color: #c7c7c7;
    border: 0;
    background-color: $background-color-main;
    transition: color 0.3s linear;

    &:hover {
      // background: linear-gradient(90deg, #01a3a8, #007ec7);
      color: #8394f5;
    }
  }

}
</style>

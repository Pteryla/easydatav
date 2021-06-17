<template>
  <div class="Components">
    <div class="main-category-components" v-if="showCateName === 'main'">
      <div class="main-item" v-for="item in allScreenComponents" :key="item.id" @click="handleChooseMainCate(item)">
        {{ item.name }}
      </div>
    </div>

    <el-container v-if="showCateName === 'sub-main'">
      <el-header @click="showCateName = 'main'" height="35px">{{ subMainDate.name }}</el-header>
      <el-main>
        <div class="sub-main-item" @click="handleChooseSubCate(item)" v-for="item in subMainDate.subSet" :key="item.id">
          {{ item.name }}
        </div>
      </el-main>
    </el-container>

    <el-container v-if="showCateName === 'sub-sub'">
      <el-header @click="showCateName = 'sub-main'" height="35px">{{ subSubData.name }}</el-header>
      <el-main>
        <div class="sub-main-item" @click="handleAddComponent(item)" v-for="item in subSubData.subSet" :key="item.id">
          {{ item.edv_name }}
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Components',
  components: {},
  setup() {},
  data() {
    return {
      showCateName: 'main',
      subMainDate: null,
      subSubData: null,
    };
  },
  created() {},
  beforeMount() {
    console.log(this.allScreenComponents);
  },
  mounted() {},
  unmounted() {},
  watch: {},
  computed: {
    ...mapState({
      allScreenComponents: state => state.screenComponents,
    }),
  },
  methods: {
    handleChooseMainCate(data) {
      console.log(data);
      this.showCateName = 'sub-main';
      this.subMainDate = data;
    },
    handleChooseSubCate(data) {
      this.showCateName = 'sub-sub';
      this.subSubData = data;
    },
    handleAddComponent(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.Components {
  width: 100%;
  height: 100%;
  .el-container {
    width: 100%;
    height: 100%;
    .el-header {
      user-select: none;
      color: #ccc;
      background-color: rgb(37, 37, 37);
      line-height: 35px;
      text-align: center;
      font-size: 14px;
    }
    .el-main {
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      padding-top: 20px;
      .sub-main-item {
        font-size: 14px;
        letter-spacing: 1px;
        color: #c2c7c7;
        box-sizing: border-box;
        cursor: pointer;
        user-select: none;
        width: 100px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        background-color: rgba(35, 35, 35, 0.89);
        margin-left: 22px;
        margin-bottom: 20px;
        box-shadow: 2px 2px 8px rgba(23, 23, 23, 0);
        border-radius: 6px;
        border: 1.5px solid rgba(0, 0, 0, 0.2);
        transition: all 0.2s linear;
        &:hover {
          box-shadow: 1px 1px 10px #151515;
          border: 1.5px solid #8063ff;
          color: #fff;
        }
      }
    }
  }
  .main-category-components {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
    .main-item {
      font-size: 14px;
      letter-spacing: 1px;
      color: #c2c7c7;
      box-sizing: border-box;
      cursor: pointer;
      user-select: none;
      width: 100px;
      height: 62px;
      line-height: 62px;
      text-align: center;
      background-color: rgba(35, 35, 35, 0.89);
      margin-left: 22px;
      margin-bottom: 20px;
      box-shadow: 2px 2px 8px rgba(23, 23, 23, 0);
      border-radius: 6px;
      border: 1.5px solid rgba(0, 0, 0, 0.2);
      transition: all 0.2s linear;
      &:hover {
        box-shadow: 1px 1px 10px #151515;
        border: 1.5px solid #8063ff;
        color: #fff;
      }
    }
  }
}
</style>

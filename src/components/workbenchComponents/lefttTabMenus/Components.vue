<template>
  <div class="Components">
    <!--    <el-container>-->
    <!--      <el-header height="35px">header</el-header>-->
    <!--      <el-main></el-main>-->
    <!--    </el-container>-->

    <div class="main-category-components">
      <div class="main-item" v-for="item in allScreenComponents" :key="item.id" @click="handleChooseMainCate(item)">
        {{ item.name }}
      </div>
    </div>
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
      currentMainCate: null,
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
      this.currentMainCate = data;
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
  }
  .main-category-components {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;

    .main-item {
      font-size: 14px;
      color: #c2c7c7;
      box-sizing: border-box;
      cursor: pointer;
      user-select: none;
      width: 100px;
      height: 100px;
      line-height: 100px;
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

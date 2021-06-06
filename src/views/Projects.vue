<template>
  <div class="projects">
    <el-container>
      <el-header height="60px">
        <e-logo></e-logo>
      </el-header>
      <el-container>
        <el-aside width="220px">
          <el-menu
            default-active="default_0"
            class="el-menu-vertical"
            @open="handleMenuOpen"
            @close="handleMenuClose"
            background-color="#191919"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="projects-collections">
              <template #title>
                <i class="el-icon-s-platform"></i>
                <span>我的项目集</span>
              </template>
              <el-menu-item-group>
                <el-menu-item :index="item.index" v-for="item in collections" :key="item.index">{{
                  item.name
                }}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="template">
              <i class="el-icon-s-shop"></i>
              <template #title>
                <span>项目模版</span>
              </template>
            </el-menu-item>
            <el-menu-item index="config">
              <i class="el-icon-s-tools"></i>
              <template #title>
                <span>配置</span>
              </template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ELogo from '@/components/commonComponents/ELogo.vue';
// @ is an alias to /src

import { mapState } from 'vuex';
export default {
  name: 'Projects',
  components: { ELogo },

  setup() {},
  data() {
    return {};
  },
  created() {},
  beforeMount() {},
  mounted() {
    console.log(this.$store.state);
  },
  unmounted() {},
  watch: {},
  methods: {
    handleMenuOpen(val) {
      console.log(val);
    },
    handleMenuClose() {},
  },
  computed: {
    ...mapState({
      collections: state => state.projects.collections,
    }),
  },
};
</script>

<style lang="scss" scoped>
.projects {
  width: 100%;
  height: 100%;
  background-color: $background-color-main;
  color: whitesmoke;
  .el-container {
    width: 100%;
    height: 100%;
    .el-header {
      background-color: $background-color-main;
    }
    .el-aside {
      user-select: none;
      background-color: #191919;
      :deep().el-menu-vertical {
        border: 0px;
        .el-menu-item-group__title {
          padding: 0;
        }
        .el-submenu [class^='el-icon-'] {
          vertical-align: text-top;
        }
        .el-menu-item [class^='el-icon-'] {
          vertical-align: text-top;
        }
      }
    }
    .el-main {
      background-color: #222;
    }
  }
}
</style>

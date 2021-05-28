<template>
  <div class="projects">
    <el-container>
      <el-header height="60px">
        <e-logo></e-logo>
      </el-header>
      <el-container>
        <el-aside width="280px">
          <el-menu
            :uniqueOpened="true"
            default-active="2"
            class="el-menu-vertical"
            @open="handleMenuOpen"
            @close="handleMenuClose"
            background-color="#212121"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template #title>
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template #title>分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template #title>选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <template #title>导航二</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <template #title>导航三</template>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <template #title>导航四</template>
            </el-menu-item>
            <el-submenu index="5">
              <template #title>
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template #title>分组一</template>
                <el-menu-item index="5-1">选项1</el-menu-item>
                <el-menu-item index="5-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="5-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
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

export default {
  name: 'Projects',
  components: { ELogo },

  setup() {},
  data() {
    return {};
  },
  created() {},
  beforeMount() {},
  mounted() {},
  unmounted() {},
  watch: {},
  methods: {
    handleMenuOpen() {},
    handleMenuClose() {},
  },
};
</script>

<style lang="scss" scoped>
.projects {
  width: 100%;
  height: 100%;
  .el-container {
    width: 100%;
    height: 100%;
    .el-header {
      background-color: $background-color-main;
    }
    .el-aside {
      background-color: #181818;
      .el-menu-vertical {
        border: 0px;
      }
    }
    .el-main {
      background-color: #222;
    }
  }
}
</style>

<template>
  <div class="Scenery" :style="`height:${realHeight}px`">
    <div class="scenery-list">
      <div class="scene-item" @click="setCurrentScene(item)" v-for="item in sceneryList" :key="item.id">
        <span class="scene-name"> {{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Scenery',
  components: {},
  setup() {},
  data() {
    return {
      realHeight: 0,
    };
  },
  created() {},
  beforeMount() {},
  mounted() {
    console.log(this.sceneryList);
    this.getRealHieght();
    window.addEventListener('resize', this.onResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
  unmounted() {},
  watch: {},
  computed: {
    ...mapState({
      sceneryList: state => state.workbench.sceneryList,
    }),
  },
  methods: {
    getRealHieght() {
      this.realHeight = document.body.clientHeight - 110;
    },
    onResize() {
      this.getRealHieght();
    },
    setCurrentScene(scene) {
      console.log(scene);
    },
  },
};
</script>

<style lang="scss" scoped>
.Scenery {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  &::-webkit-scrollbar {
    z-index: 0 !important;
    width: 8px;
    height: 8px;
    background-color: rgba(255, 255, 255, 0);
  }
  &::-webkit-scrollbar-corner {
    z-index: 0;
    background-color: rgba(255, 255, 255, 0);
  }
  &::-webkit-scrollbar-thumb {
    width: 8px;
    height: 8px;
    border-radius: 3px;
    z-index: 0 !important;
    background-color: rgb(54, 54, 54);
  }

  .scenery-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    box-sizing: border-box;

    .scene-item:first-child {
      margin-top: 20px;
    }
    .scene-item {
      position: relative;
      width: 210px;
      border-radius: 5px;
      height: 120px;
      background: rgb(29, 29, 29);
      margin-top: 30px;
      .scene-name {
        position: absolute;
        top: 10px;
        left: 10px;
        color: #ccc;
      }
    }
  }
}
</style>

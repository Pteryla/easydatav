<template>
  <div class="Scenery" :style="`height:${realHeight}px`">
    <div class="scenery-list">
      <div
        class="scene-item"
        :class="{ active: currentSceneId === item.id }"
        @click="setCurrentScene(item)"
        v-for="item in sceneryList"
        :key="item.id"
      >
        <span class="scene-name"> {{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
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
    this.getRealHeight();
    window.addEventListener('resize', this.onResize);
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize);
  },
  watch: {},
  computed: {
    ...mapState({
      sceneryList: state => state.workbench.sceneryList,
      currentSceneId: state => state.workbench.currentSceneId,
    }),
  },
  methods: {
    ...mapMutations(['workbench/setCurrentSceneById']),
    getRealHeight() {
      this.realHeight = document.body.clientHeight - 110;
    },
    onResize() {
      this.getRealHeight();
    },
    setCurrentScene(scene) {
      console.log(scene);
      this['workbench/setCurrentSceneById'](scene.id);
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
    width: 8px;
    height: 8px;
    z-index: 0 !important;
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
      margin-top: 30px;
    }
    .scene-item {
      cursor: pointer;
      position: relative;
      width: 210px;
      height: 120px;
      background: rgb(29, 29, 29);
      border-radius: 5px;
      margin-top: 30px;
      border-bottom: 2px solid #343434;
      .scene-name {
        position: absolute;
        top: 10px;
        left: 10px;
        color: #ccc;
      }
    }
    .active {
      border-bottom: 2px solid rgb(87, 89, 236);
      box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.24);
    }
  }
}
</style>

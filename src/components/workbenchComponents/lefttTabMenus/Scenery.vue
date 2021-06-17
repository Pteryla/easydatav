<template>
  <div class="Scenery">
    <div class="scenery-item"></div>
    <div class="scenery-item"></div>
    <div class="scenery-item"></div>
    <div class="scenery-item"></div>
    <div class="scenery-item"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Scenery',
  components: {},
  setup() {},
  data() {
    return {};
  },
  created() {},
  beforeMount() {},
  mounted() {
    console.log(this.sceneryList);
  },
  unmounted() {},
  watch: {},
  computed: {
    ...mapState({
      sceneryList: state => state.workbench.sceneryList,
    }),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.Scenery {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  .scenery-item {
    width: 200px;
    height: 120px;
    background: #fff;
    margin-top: 20px;
  }
}
</style>

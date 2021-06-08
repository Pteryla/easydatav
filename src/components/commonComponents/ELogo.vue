<template>
  <div class="e-logo">MyDataV</div>
</template>

<script>
// iEasyDataV
export default {
  name: 'ELogo',
  setup() {
  },
  data() {
    return {};
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
  methods: {},
};
</script>

<style lang="scss" scoped>
.e-logo {
  position: relative;
  width: 105px;
  height: 60px;
  font-weight: bold;
  line-height: 60px;
  font-size: 20px;
  background: linear-gradient(to right, #03bcf4, #f441a5, #ffee00, #03bcf4); /*渐变背景*/
  background-size: 400%;
  user-select: none;
  background-clip: text;
  color: transparent;
  //animation: flashColor 8s linear infinite;
  @keyframes flashColor {
    100% {
      background-position: -400% 0;
    }
  }
}
</style>
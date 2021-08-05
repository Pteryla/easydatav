<template>
  <div class="LoginAndRegister">
    <div class="dec-top-right"></div>
    <div class="dec-bottom-left"></div>
    <div class="main-container">
      <div class="toggle-move-block-one" :class="{ 'one-action': isToggled }">
        <h2>Welcome Back</h2>
        <p>This is an awesome Application!</p>
        <button @click="toggleMove" class="btn">
          {{ isToggled ? "SIGN UP" : "SIGN IN" }}
        </button>
      </div>
      <div class="toggle-move-block-two" :class="{ 'two-action': isToggled }">
        <h1>Welcome Back</h1>
        <p>This is an awesome application</p>
        <input placeholder="Name" type="text" class="" />
        <input placeholder="Email" type="text" class="" />
        <input placeholder="Password" type="password" class="" />
        <button @click="toggleMove" class="btn">
          {{ isToggled ? "SIGN IN" : "SIGN UP" }}
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginAndRegister",
  components: {},
  setup() {},
  data() {
    return {
      isToggled: false,
    };
  },
  methods: {
    toggleMove() {
      this.isToggled = !this.isToggled;
    },
  },
});
</script>

<style lang="scss" scoped>
.LoginAndRegister {
  width: 100vw;
  height: 100vh;
  background-color: #f0f4f3;
  position: relative;
  overflow: hidden;
  .dec-top-right {
    position: absolute;
    top: -20px;
    right: -220px;
    width: 400px;
    height: 300px;
    transform: rotate3d(1, -1, 1, 50deg);
    background-color: #e35e6a;
  }
  .dec-bottom-left {
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #ffe540, #f6bd37);
  }
  .main-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    width: 900px;
    height: 600px;
    background-color: #fff;
    // background-color: #00000000;
    box-shadow: 0px 12px 18px 1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    .toggle-move-block-one {
      position: absolute;
      width: 340px;
      height: 100%;
      background-image: linear-gradient(45deg, #4cbf97, #3aa9ad);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #fff;
      transition: transform 0.6s ease-in-out;
      z-index: 2;
      h2 {
        color: #fff;
      }
      .btn {
        cursor: pointer;
        width: 180px;
        height: 40px;
        border-radius: 15px;
        border: 1px solid #fff;
        color: #fff;
        background: #00000000;
        margin-top: 20px;
      }
    }
    .one-action {
      transform: translateX(560px);
    }
    .toggle-move-block-two {
      position: absolute;
      width: 560px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translateX(340px);
      justify-content: center;
      transition: transform 0.4s ease-in-out;
      z-index: 1;
      h1 {
        color: #3baaac;
      }
      p {
        margin-bottom: 25px;
        font-size: 12px;
        color: #333;
      }
      input {
        padding-left: 10px;
        width: 300px;
        height: 30px;
        margin: 8px 0;
        border: none;
        background-color: #f4f8f7;
      }
      input:focus {
        outline: 1px solid #3baaac !important;
      }
      .btn {
        user-select: none;
        cursor: pointer;
        width: 180px;
        height: 40px;
        border-radius: 15px;
        border: 1px solid #fff;
        color: #fff;
        background-image: linear-gradient(45deg, #4cbf97, #3aa9ad);
        margin-top: 20px;
        box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.1);
        &:active {
          box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
        }
      }
    }
    .two-action {
      transform: translateX(0px);
    }
  }
}
</style>

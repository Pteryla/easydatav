<template>
  <div class="login">
    <div class="login-background">
      <div class="login-background-left"></div>
      <div class="login-background-right"></div>
    </div>
    <div class="login-box">
      <div class="lines-pie">
        <div class="line-item" v-for="(item, index) in lines" :key="index"></div>
      </div>
      <div class="flowers flowers-mini flowers-3">
        <div class="flowers-h"></div>
        <div class="flowers-v"></div>
      </div>
      <div class="flowers flowers-mini flowers-4">
        <div class="flowers-h"></div>
        <div class="flowers-v"></div>
      </div>
      <div class="login-box-left">
        <div class="login-logo">iEasyDataV</div>
        <div class="flowers flowers-medium flowers-1">
          <div class="flowers-h"></div>
          <div class="flowers-v"></div>
        </div>
        <div class="flowers flowers-mini flowers-2">
          <div class="flowers-h"></div>
          <div class="flowers-v"></div>
        </div>
      </div>
      <div class="login-box-middle">
        <div class="login-box-middle-left"></div>
        <div class="login-box-middle-right"></div>
        <div class="form-box">
          <div class="header">Welcome! 🍧</div>
          <div class="inputor">
            <div class="inputor-wrapper">
              <input spellcheck="false" maxlength="25" type="text" value="" placeholder="Your Account" />
            </div>
          </div>
          <div class="inputor">
            <div class="inputor-wrapper">
              <input spellcheck="false" maxlength="18" type="password" value="" placeholder="Your Password" />
            </div>
          </div>

          <div class="submit-btn-wrapper"><button class="submit-btn">Submit</button></div>

          <div class="tips-register">
            <span>没有账号？</span><span class="go-to-register" @click="navigateTo('Register')">去注册</span>
          </div>
        </div>
      </div>
      <div class="login-box-right"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  props: {},
  data() {
    return {
      lines: [],
    };
  },
  created() {
    this.initLines();
  },
  methods: {
    navigateTo(pathName) {
      this.$router.push({ name: pathName });
    },
    initLines() {
      let num = 26;
      let i = 0;
      while (i < num) {
        this.lines.push(i);
        i++;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@keyframes flowers_move {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(0.8);
  }
}

.flowers {
  width: 40px;
  height: 40px;
  position: relative;
  animation: flowers_move 3s linear 0s infinite alternate;
  .flowers-h {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 35%;
    background-color: #daeafa;
    border-radius: 10px;
  }
  .flowers-v {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 35%;
    background-color: #daeafa;
    border-radius: 10px;
  }
}

.flowers-mini {
  width: 20px;
  height: 20px;
}
.flowers-medium {
  width: 30px;
  height: 30px;
}
.flowers-big {
  width: 50px;
  height: 50px;
}

.login {
  width: 100%;
  height: 100%;
  min-width: 900px;
  min-height: 700px;

  position: relative;
  .login-background {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    .login-background-left {
      width: 65%;
      background-color: #f8f8f8;
    }
    .login-background-right {
      width: 35%;
      background-color: #2797f3;
    }
  }
  .login-box {
    position: absolute;
    display: flex;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    max-width: 890px;
    min-width: 800px;

    max-height: 550px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 5px 6px 8px 1px rgba(0, 0, 0, 0.2);

    @keyframes pie_move {
      0% {
        top: 15%;
        right: 20%;
        transform: scale(0.8);
      }
      50% {
        top: 30px;
        right: 25%;
        transform: scale(1.2);
      }
      100% {
        top: 15%;
        right: 20%;
        transform: scale(0.8);
      }
    }

    .lines-pie {
      position: absolute;
      top: 15%;
      right: 20%;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      animation: pie_move 10s linear 0s infinite alternate;
      .line-item {
        width: 5%;
        flex-shrink: 0;
        height: 200%;
        border-right: 1px solid #add3f4;
        transform: rotate(45deg) translate(-900%, -10%);
      }
    }
    .flowers-3 {
      position: absolute;
      top: 30%;
      right: 15%;
    }
    .flowers-4 {
      position: absolute;
      bottom: 10%;
      right: 54%;
    }
    .login-box-left {
      width: 28%;
      box-sizing: border-box;
      .login-logo {
        height: 70px;
        line-height: 70px;
        box-sizing: border-box;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        color: #00052e;
        user-select: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
          'Helvetica Neue', sans-serif;
      }
      .flowers-1 {
        margin-top: 40px;
        left: 40px;
      }
      .flowers-2 {
        margin-top: 200px;
        left: 20px;
      }
    }
    .login-box-middle {
      position: relative;
      width: 44%;
      height: 100%;
      display: flex;
      box-sizing: border-box;
      .login-box-middle-left {
        box-sizing: border-box;
        width: 50%;
      }
      .login-box-middle-right {
        box-sizing: border-box;
        width: 50%;
      }
      .form-box {
        position: absolute;
        width: 90%;
        height: 55%;
        background-color: #fff;
        box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.05);
        top: 50%;
        left: 50%;
        border-radius: 8px;
        transform: translate(-50%, -50%);
        .header {
          height: 80px;
          line-height: 80px;
          font-weight: 800;
          color: #091032;
          font-size: 20px;
          text-align: center;
          user-select: none;
        }
        .inputor {
          width: 100%;
          height: 35px;
          padding: 0 18%;
          box-sizing: border-box;
          margin-top: 10px;
          .inputor-wrapper {
            width: 100%;
            height: 35px;
            border-bottom: 1px solid #0697f2;
            display: flex;
            justify-content: center;
            input {
              font-size: 14px;
              width: 95%;
              height: 35px;
              margin: 0;
              padding: 0;
              // text-align: center;
              color: rgb(20, 97, 212);
              box-sizing: border-box;
              border: none;
              outline: none;
              &::-webkit-input-placeholder {
                font-size: 12px;
              }
            }
            input[type='password'] {
              letter-spacing: 3px;
              font-size: 15px;
              color: rgb(20, 97, 212);
            }
            input[type='password']::-webkit-input-placeholder {
              letter-spacing: 0;
              font-size: 12px;
            }
            input[type='password']:-moz-placeholder {
              letter-spacing: 0;
              font-size: 12px;
            }
            input[type='password']::-moz-placeholder {
              letter-spacing: 0;
              font-size: 12px;
            }
            input[type='password']:-ms-input-placeholder {
              letter-spacing: 0;
              font-size: 12px;
            }
          }
        }
        .submit-btn-wrapper {
          width: 100%;
          height: 60px;
          .submit-btn {
            margin-top: 30px;
            left: 50%;
            transform: translateX(-50%);
            position: absolute;
            height: 30px;
            width: 80px;
            font-size: 12px;
            color: #0697f2;
            outline: none;
            border: none;
            background-color: #daeafa;
            cursor: pointer;
            box-shadow: 1px 1px 5px 1px rgba(1, 48, 110, 0.08);
            border-radius: 4px;
            &:active {
              box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0);
            }
          }
        }
        .tips-register {
          user-select: none;
          margin-top: 30px;
          font-size: 12px;
          display: flex;
          color: #888888;
          justify-content: center;
          .go-to-register {
            color: #2797f3;
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
    .login-box-right {
      width: 28%;
      box-sizing: border-box;
    }
  }
}
</style>

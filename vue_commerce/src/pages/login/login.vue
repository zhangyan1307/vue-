<template>
  <div class="login_container">
    <Top />
    <div class="login_register">
      <i class="iconfont icon-houtui" @click="back"></i>
      <p>登录</p>
      <p @click="register">注册</p>
    </div>
    <main>
      <div class="login_inner">
        <label for="mobile">电话号码：</label>
        <input type="text" id="mobile" v-model="queryInfo.username" />
        <label for="password">密码：</label>
        <input type="password" id="password" v-model="queryInfo.password" />
        <p>忘记密码</p>
        <button @click="login">登录</button>
      </div>
    </main>
  </div>
</template>

<script>
import Top from "@/components/user/top";
export default {
  data() {
    return {
      queryInfo: {
        username: "",
        password: ""
      }
    };
  },
  components: {
    Top
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    register() {
      this.$router.push("/register");
    },
    login() {
      this.$http.post(`/api/memberlogin`, this.queryInfo).then(res => {
        console.log(res)
        if (res.data.status == 1) {
          window.localStorage.setItem("id",res.data.data._id)
          this.Toast(res.data.info);
          setTimeout(()=>{
            this.back()
          },2000)
        } else {
          this.Toast(res.data.info);
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.login_container {
  width: 100%;
  height: 100%;

  .login_register {
    width: px2rem(689);
    height: px2rem(39);
    position: absolute;
    top: px2rem(77);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;

    p {
      font-size: px2rem(33);
      color: white;
    }

    i {
      color: white;
      font-size: px2rem(40);
    }
  }

  main {
    width: 100%;
    height: 100%;
    position: relative;

    .login_inner {
      width: px2rem(602);
      height: px2rem(511);
      position: absolute;
      top: px2rem(245);
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: px2rem(30);

      #mobile, #password {
        border-bottom: px2rem(2) solid #a3a3a3;
      }

      input {
        margin-bottom: px2rem(56);
        padding-top: px2rem(30);
      }

      p {
        align-self: flex-end;
        color: #666666;
      }

      button {
        border: none;
        background-color: #ff9900;
        color: white;
        display: block;
        height: px2rem(101);
      }
    }
  }
}
</style>
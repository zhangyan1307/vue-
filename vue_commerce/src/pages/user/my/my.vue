<template>
  <div class="container">
    <header>
      <div class="incontPic">
        <i class="iconfont icon-shezhi"></i>
        <p>个人中心</p>
        <i class="iconfont icon-xx"></i>
      </div>
      <div class="Head_shot">
        <div class="inner_shot" @click="login"></div>
      </div>
    </header>
    <div class="center">
      <p class="login">点击登入</p>
      <div class="Collect">
        <i class="iconfont icon-shezhi"></i>
        <p>我的收藏</p>
      </div>
    </div>
    <div class="line"></div>
    <div class="order">
      <p class="MyOrder">我的订单</p>
      <p class="AllOrder">全部订单</p>
    </div>
    <div class="apply">
      <div class="apply_inner">
        <i class="iconfont icon-daifukuan"></i>
        <p>待付款</p>
      </div>
      <div class="apply_inner">
        <i class="iconfont icon-daifahuo"></i>
        <p>待发货</p>
      </div>
      <div class="apply_inner">
        <i class="iconfont icon-daishouhuo"></i>
        <p>待收货</p>
      </div>
      <div class="apply_inner">
        <i class="iconfont icon-pingjia"></i>
        <p>待评价</p>
      </div>
      <div class="apply_inner">
        <i class="iconfont icon-shouhou"></i>
        <p>退款/售后</p>
      </div>
    </div>
    <div class="line"></div>
    <div class="address">
        <p>收获地址</p>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        login(){
            this.$router.push("/login")
        }
    },
};
</script>

<style lang="stylus" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .center {
    width: 100%;
    height: px2rem(260);
    background-color: #fafafa;
    position: relative;
    z-index: -1;

    .login {
      font-size: px2rem(31);
      text-align: center;
      line-height: px2rem(260);
    }

    .Collect {
      width: px2rem(192);
      height: px2rem(36);
      position: absolute;
      left: px2rem(35);
      bottom: px2rem(46);
      display: flex;
      justify-content: space-between;
      justify-items: center;

      p {
        font-size: px2rem(30);
      }

      i {
        font-size: px2rem(40);
      }
    }
  }

  .line {
    width: 100%;
    height: px2rem(13);
    background-color: #efedee;
    border-top: px2rem(1) solid #f5f5f5;
    border-bottom: px2rem(1) solid #f5f5f5;
  }

  .order {
    width: 100%;
    height: px2rem(124);
    border-bottom: 1px solid #b3b3b3;
    display: flex;
    justify-content: space-between;
    line-height: px2rem(124);
    font-size: px2rem(30);
    padding-left: px2rem(46);
    padding-right: px2rem(2);

    .AllOrder {
      color: #989898;
    }
  }

  .apply {
    width: 100%;
    height: px2rem(188);
    background-color: #fafafa;
    display flex
    justify-content space-around
    align-items center
    .apply_inner{
        display flex
        flex-direction column
        height px2rem(97)
        justify-content space-between
        i{
            align-self center
            font-size px2rem(48)
            color #aaaaaa
        }
        p{
            font-size px2rem(21)
            color #666666
        }
    }
  }
  .address{
      width 100%
      height px2rem(128)
      background-color #fafafa
      padding-left px2rem(46)
      p{
          font-size px2rem(30)
          color #989898
          line-height px2rem(128)
      }
  }
}

header {
  width: 100%;
  height: px2rem(370);
  background-color: #ff9900;
  border-bottom: px2rem(1) solid #fbdfb7;
  position: relative;

  .Head_shot {
    width: px2rem(207);
    height: px2rem(207);
    border-radius: 50%;
    background-color: white;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    border: px2rem(1) solid #fff0d9;

    .inner_shot {
      width: px2rem(182);
      height: px2rem(182);
      border-radius: 50%;
      background-color: #e7dedf;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .incontPic {
    width: px2rem(674);
    height: px2rem(51);
    position: absolute;
    top: px2rem(73);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;

    i {
      font-size: px2rem(60);
      color: white;
    }

    p {
      color: white;
      font-size: px2rem(38);
    }
  }
}
</style>
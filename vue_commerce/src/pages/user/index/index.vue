<template>
  <div class="container">
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in bannerList" :key="item._id">
          <img :src="url+item.imgurl" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="search_box">
      <input type="text" placeholder="请输入搜索类容" />
      <i class="iconfont icon-sousuo"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerList: [],
      url: "http://127.0.0.1:3000"
    };
  },
  mounted() {
    this.$http.get(`/api/bannerlist`).then(res => {
      console.log(res);
      this.bannerList = res.data.data;
    });
  }
};
</script>

<style lang="stylus" scoped>
.container {
  width: 100%;
  height: 100%;
  position relative

  .banner {
    width: 100%;
    height: px2rem(517);

    .my-swipe {
      width: 100%;
      height: 100%;
    }

    .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.search_box {
    position:absolute
    top:px2rem(65)
    left:50%
    transform translateX(-50%)
    i{
        position absolute
        top 50%
        right 0
        transform translateY(-50%)
        font-size px2rem(50)
    }
    input {
    width: px2rem(516);
    height: px2rem(61);
    opacity 0.5
    border-radius 10px
  }
}
</style>
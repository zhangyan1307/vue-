<template>
  <div class="container">
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <router-link to="/home/index" tag="div">
        <i class="iconfont icon-shouye1"></i>
        首页
      </router-link>
      <router-link to="/home/class" tag="div">
        <i class="iconfont icon-fenlei-"></i>
        分类
      </router-link>
      <router-link to="/home/car" tag="div">
        <i class="iconfont icon-gouwuche"></i>
        购物车
      </router-link>
      <router-link to="/home/my" tag="div">
        <i class="iconfont icon-wode"></i>
        我
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

footer {
  width: 100%;
  height: px2rem(100);
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: px2rem(30);
  border-top: px2rem(2) solid #eeeeee;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;

    i {
      font-size: px2rem(50);
    }
  }
}

main {
  flex: 1;
  overflow-y auto
}

.router-link-exact-active {
  color: #ff9900;
}
</style>
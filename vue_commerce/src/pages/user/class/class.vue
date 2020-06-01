<template>
  <div class="class_container">
    <header>
      <Class />
      <div class="search_box">
        <input type="text" placeholder="请输入搜索类容" />
        <i class="iconfont icon-sousuo"></i>
      </div>
    </header>
    <main>
      <Left />
      <Rigth />
    </main>
  </div>
</template>

<script>
import Class from "@/components/user/top";
import Left from "@/components/user/class/left";
import Rigth from "@/components/user/class/rigth";
export default {
  data() {
    return {
      i: 0
    };
  },
  methods: {
    fun(data) {
      this.i = data;
    }
  },
  components: {
    Class,
    Left,
    Rigth
  }
};
</script>

<style lang="stylus" scoped>
.class_container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    height: px2rem(138);
  }

  main {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }

  .search_box {
    position: absolute;
    top: px2rem(59);
    left: 50%;
    transform: translateX(-50%);

    i {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      font-size: px2rem(50);
    }

    input {
      width: px2rem(516);
      height: px2rem(61);
      opacity: 0.5;
      border-radius: 10px;
    }
  }
}
</style>
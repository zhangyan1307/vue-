<template>
  <div class="left">
    <ul>
      <li
        v-for="(item,index) in list"
        :key="item._id"
        @click="active(index)"
        :class="index==i?'active':''"
      >
        {{item.title}}
        <div class="blueline" v-show="index==i?flag:!flag"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      flag: true,
      i: 0
    };
  },
  mounted() {
    this.$http.get(`/api/catelist`).then(res => {
      this.list = res.data.data;
    });
  },
  methods: {
    active(index) {
      this.i = index;
      this.$store.commit("changeIndex",this.i)
    },
  }
};
</script>

<style lang="stylus" scoped>
.left {
  width: px2rem(235);
  height: 100%;
  background-color: #fafafa;

  ul {
    width: 100%;
    height: 100%;

    li {
      width: 100%;
      height: px2rem(94);
      font-size: px2rem(30);
      text-align: center;
      line-height: px2rem(94);
      position: relative;

      &.active {
        color: #fe9900;
        background-color #fff
      }

      .blueline {
        width: px2rem(10);
        height: 100%;
        background-color: #1c88a5;
        border-right: px2rem(1) solid #a8d1ed;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
}
</style>
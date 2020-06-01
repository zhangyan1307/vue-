<template>
  <div class="rigth">
    <ul v-if="RightList && RightList.length>0">
      <li v-for="item in RightList[index].children" :key="item._id" @click="jumpDetail(item._id)">
        <div class="imgContaner">
          <img :src="item.imgurl?url+item.imgurl:url+item.img" alt />
        </div>
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$http.get(`/api/categoods`).then(res => {
      this.RightList = res.data.data;
    });
  },
  data() {
    return {
      RightList: [],
      url: "http://127.0.0.1:3000",
    };
  },
  computed: {
      index(){
          return this.$store.state.index
      }
  },
  methods:{
      jumpDetail(id){
        this.$router.push(`/detail?id=${id}`)
      }
  }
};
</script>

<style lang="stylus" scoped>
.rigth {
  width: px2rem(495);
  height: 100%;
  padding-right: px2rem(19);
  padding-top: px2rem(21);

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap wrap

    li {
      width: px2rem(230);
      height: px2rem(239);
      border: px2rem(1) solid #2287a5;
      border-radius: px2rem(10);
      display: flex;
      flex-direction: column;
      margin-bottom px2rem(21)

      .imgContaner {
        width: 100%;
        height: px2rem(190);
        display: flex;
        justify-content: center;

        img {
          width: px2rem(165);
          height: px2rem(172);
          align-self: center;
        }
      }

      p {
        flex: 1;
        text-align: center;
        background-color: #1d84a7;
        color: white;
        border-radius: 0 0 px2rem(10) px2rem(10);
        line-height px2rem(50)
      }
    }
  }
}
</style>
<template>
  <div class="container">
    <Car :title="'购物车'" />
    <main>
      <section>
        <ul>
          <li v-for="item in goodslist" :key="item._id">
            <i
              :class="['iconfont icon-quanxuan',item.checked?'active':'']"
              @click="changeChecked(item)"
            ></i>
            <div class="img_container"></div>
            <div class="goods_num_innner">
              <p>{{item.goods_title}}</p>
              <div class="num">
                <div @click="lower(item)">-</div>
                <div>{{item.goods_num}}</div>
                <div @click="add(item)">+</div>
              </div>
            </div>
            <div class="goods_price">￥ {{item.goods_price*item.goods_num}}</div>
          </li>
        </ul>
      </section>
      <footer>
        <div class="check">
          <i :class="['iconfont icon-quanxuan',ischecked?'active':'']"></i>
          <p>全选</p>
        </div>
        <div class="total">
          <p>￥ {{total}}</p>
        </div>
        <div class="goodsBuy">去结算</div>
      </footer>
    </main>
  </div>
</template>

<script>
import Car from "@/components/user/top";
export default {
  components: {
    Car
  },
  mounted() {
    this.$store.dispatch("goodsList");
  },
  computed: {
    goodslist() {
      return this.$store.state.num;
    },
    total(){
      let arr=this.$store.state.num
      let number=0
      arr.forEach(item=>{
         number+=parseInt(item.goods_num*item.goods_price)
      })
      return number
    },
    ischecked(){
      let arr=this.$store.state.num
      let is=arr.every(item=>{
        return item.checked==true
      })
      return is
    }
  },
  methods: {
    changeChecked(item) {
      let obj = {
        userid: item.userid,
        goodsid: item.goodsid,
        goods_num: item.goods_num,
        checked: !item.checked
      };
      this.$store.dispatch("editGoodsList", obj);
    },
    lower(item) {
      let obj = {
        userid: item.userid,
        goodsid: item.goodsid,
        type: 2,
        checked: item.checked
      };
      this.$store.dispatch("editGoodsList", obj);
    },
    add(item) {
      let obj = {
        userid: item.userid,
        goodsid: item.goodsid,
        type: 1,
        checked: item.checked
      };
      this.$store.dispatch("editGoodsList", obj);
    }
  }
};
</script>

<style lang="stylus" scoped>
.container {
  width: 100%;
  height: 100%;

  main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    footer {
      width: 100%;
      border-top: px2rem(3) solid #eeeeee;
      display: flex;

      div {
        flex: 1;
        text-align: center;
      }

      .check {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: px2rem(20) 0;
      }

      .total {
        line-height: px2rem(115);
        color: red;
      }

      .goodsBuy {
        line-height: px2rem(115);
        background-color: #ff5500;
        color: #fff;
      }
    }

    section {
      flex: 1;
      padding-top: px2rem(40);

      ul {
        li {
          height: px2rem(157);
          display: flex;
          margin-bottom: px2rem(30);

          i {
            width: px2rem(102);
            font-size: px2rem(50);
            line-height: px2rem(157);
            text-align: center;

            &.active {
              color: #ff9900;
            }
          }

          .img_container {
            width: px2rem(157);
            background-color: #ccc;
          }

          .goods_num_innner {
            width: px2rem(280);
            display: flex;
            padding-left: px2rem(30);
            flex-direction: column;
            justify-content: space-between;

            p {
              height: px(72);
              font-size: px2rem(30);
            }

            .num {
              display: flex;
              height: px2rem(47);

              div {
                border: 1px solid #cccccc;
                text-align: center;
                line-height: px2rem(47);
                flex: 1;
              }
            }
          }

          .goods_price {
            width: px2rem(156);
            line-height: px2rem(157);
            text-align: center;
            color: red;
            padding-left: px2rem(30);
          }
        }
      }
    }
  }
  .check{
    .active{
      color: #ff9900;
    }
  }
}
</style>
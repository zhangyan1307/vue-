<template>
  <div class="detaile_container">
    <div class="detaile_img">
      <img :src="url+listInfo.imgurl" />
      <div class="detaile_iconfont">
        <div class="iconfont_left">
          <i class="iconfont icon-houtui" @click="back"></i>
        </div>
        <div class="iconfont_right">
          <div class="iconfont_right_left">
            <i class="iconfont icon-gouwuche"></i>
            <div class="computed">{{num.length}}</div>
          </div>
          <div class="iconfont_right_right">
            <i class="iconfont icon-xx"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="detaile_info">
      <div class="detaile_info_top">
        <div class="introduce">
          <p>{{listInfo.title}}</p>
        </div>
        <div class="collect">
          <i class="iconfont icon-shezhi"></i>
          <p>收藏</p>
        </div>
      </div>
      <div class="detaile_info_bottom">
        <div class="detaile_info_bottom_top">
          <p>￥ {{listInfo.price}}</p>
          <div class="yellow_in">6.5折</div>
          <div class="yellow_in">包邮</div>
        </div>
        <div class="detaile_info_bottom_bottom">
          <div class="bottom_left">
            <del>￥4999</del>
          </div>
          <div class="bottom_right">
            <span>正品货源</span>
            <span>一键代发</span>
            <span>全球直邮</span>
            <span>售后无忧</span>
          </div>
        </div>
      </div>
    </div>
    <div class="action_price">
      <div class="price">
        <p>
          总价：
          <span>{{listInfo.price*count}}</span>
        </p>
      </div>
      <div class="action">
        <div class="addcart" @click="changeShow">加入购物车</div>
        <div class="buycart">购买商品</div>
      </div>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '70%' }">
      <div class="img_container">
        <img :src="listInfo.imgurl?url+listInfo.imgurl:url+listInfo.img" alt />
      </div>
      <div class="goods_info">
        <p class="goods_price">￥ {{listInfo.price}}</p>
        <p>库存{{storeNum}}件</p>
        <p>请选择商品属性</p>
      </div>
      <div class="goods_number">
        <div class="number">购买数量</div>
        <div class="add_lower_number">
          <span class="control" @click="lower">-</span>
          <span class="num">{{count}}</span>
          <span class="control" @click="add">+</span>
        </div>
      </div>
      <div class="goods_Species">
        <div class="goods_Species_top">
          <p>大小</p>
          <div class="last">
            <span
              @click="changeI1(index)"
              v-for="(item,index) in size"
              :key="index"
              :class="index==i1?'active':''"
            >{{item}}</span>
          </div>
        </div>
        <div class="goods_Species_bottom">
          <p>颜色</p>
          <div class="last">
            <span
              @click="changeI2(index)"
              v-for="(item,index) in color"
              :key="index"
              :class="index==i2?'active':''"
            >{{item}}</span>
          </div>
        </div>
      </div>
      <div class="action_price">
        <div class="price">
          <p>
            总价：
            <span>￥{{listInfo.price*count}}</span>
          </p>
        </div>
        <div class="action">
          <div class="addcart" @click="AddCart">加入购物车</div>
          <div class="buycart">购买商品</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listInfo: {},
      url: "http://127.0.0.1:3000",
      show: false,
      size: ["4.1", "5.1", "6.1"],
      color: ["白色", "黑色", "灰色"],
      i1: null,
      i2: null,
      count: 1,
      storeNum: 10
    };
  },
  computed: {
    id() {
      return this.$route.query.id;
    },
    num() {
      return this.$store.state.num;
    }
  },
  created() {
    this.getDetilList();
    this.$store.dispatch("goodsList");
  },
  methods: {
    getDetilList() {
      this.$http
        .get(`/api/goodsinfo`, { params: { id: this.id } })
        .then(res => {
          console.log(res.data);
          this.listInfo = res.data.data;
        });
    },
    back() {
      this.$router.go(-1);
    },
    changeShow() {
      this.show = true;
    },
    AddCart() {
      let obj = {
        userid: window.localStorage.getItem("id"),
        goodsid: this.id,
        goods_num: this.count
      };
      if (!window.localStorage.getItem("id")) {
        this.Toast("请登入");
        setTimeout(() => {
          this.$router.push("/login");
        }, 2000);
      } else if (this.i1 == null || this.i2 == null) {
        this.Toast("请选择必选商品信息");
      } else {
        this.$store.dispatch("addlist", obj);
      }
    },
    changeI1(index) {
      this.i1 = index;
    },
    changeI2(index) {
      this.i2 = index;
    },
    add() {
      this.$store.dispatch("goodsList");
      if (this.count < this.storeNum) {
        this.count++;
      } else {
        this.Toast("数量超过仓库库存");
        return;
      }
    },
    lower() {
      this.count--;
      if (this.count < 1) {
        this.count = 1;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.detaile_container {
  width: 100%;
  height: 100%;

  .detaile_img {
    width: 100%;
    height: px2rem(577);
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }

    .detaile_iconfont {
      width: px2rem(699);
      height: px2rem(56);
      position: absolute;
      top: px2rem(49);
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-between;

      .iconfont_left {
        width: px2rem(56);
        background-color: #b2b2b2;
        border-radius: 50%;

        i {
          font-size: px2rem(50);
          color: #fff;
        }
      }

      .iconfont_right {
        width: px2rem(145);
        display: flex;
        justify-content: space-between;

        div {
          width: px2rem(52);
          height: px2rem(52);
          background-color: #b2b2b2;
          border-radius: 50%;
          position: relative;

          .computed {
            width: px2rem(40);
            height: px2rem(40);
            border-radius: 50%;
            background-color: #ccc;
            text-align: center;
            line-height: px2rem(40);
            position: absolute;
            top: px2rem(-30);
            right: px2rem(-10);
            color: red;
          }

          i {
            font-size: px2rem(35);
            color: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
  }

  .detaile_info {
    width: 100%;
    height: px2rem(168);
    border-bottom: px2rem(1) solid #dddddd;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: px2rem(10);

    .detaile_info_top {
      width: 100%;
      height: px2rem(70);
      display: flex;
      padding-left: px2rem(29);

      .introduce {
        width: px2rem(622);
        padding-right: px2rem(53);
        border-right: px2rem(1) solid #dddddd;

        p {
          font-size: px2rem(28);
        }
      }

      .collect {
        flex: 1;
        display: flex;
        flex-direction: column;
        text-align: center;
        color: red;
      }
    }

    .detaile_info_bottom {
      width: px2rem(657);
      height: px2rem(70);
      padding-left: px2rem(24);
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .detaile_info_bottom_top {
        width: px2rem(344);
        height: px2rem(30);
        display: flex;
        font-size: px2rem(25);
        justify-content: space-around;

        p {
          color: red;
        }

        .yellow_in {
          width: px2rem(70);
          background-color: #ff9900;
          color: #fff;
          text-align: center;
        }
      }

      .detaile_info_bottom_bottom {
        width: px2rem(660);
        height: px2rem(30);
        display: flex;
        justify-content: space-between;
        padding-right: px2rem(15);
        padding-left: px2rem(20);

        .bottom_left {
          width: px2rem(101);

          del {
            color: #999999;
          }
        }

        .bottom_right {
          width: px2rem(500);

          span {
            padding: px2rem(4) px2rem(10);
            border: px2rem(2) solid #ff9801;
            color: #ff9801;
          }
        }
      }
    }
  }

  .action_price {
    width: 100%;
    height: px2rem(100);
    border-top: px2rem(1) solid #dddddd;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;

    .price {
      width: px2rem(350);
      padding-left: px2rem(30);

      p {
        line-height: px2rem(100);
        font-size: px2rem(30);

        span {
          color: red;
        }
      }
    }

    .action {
      flex: 1;
      display: flex;

      .addcart {
        background-color: #ff9900;
        color: #fff;
        flex: 1;
        font-size: px2rem(30);
        line-height: px2rem(100);
        text-align: center;
      }

      .buycart {
        background-color: red;
        color: #fff;
        flex: 1;
        px2rem(30);
        line-height: px2rem(100);
        text-align: center;
      }
    }
  }

  .van-popup {
    overflow: visible;
    position: relative;
    padding-top: px2rem(220);
    padding-left: px2rem(43);

    .img_container {
      width: px2rem(216);
      height: px2rem(216);
      background-color: #dddddd;
      border-radius: px2rem(20);
      position: absolute;
      top: px2rem(-28);
      left: px2rem(42);
      padding: px2rem(4);

      img {
        width: 100%;
        height: 100%;
        border-radius: px2rem(20);
      }
    }

    .goods_info {
      width: px2rem(174);
      height: px2rem(100);
      position: absolute;
      top: px2rem(66);
      left: px2rem(281);
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .goods_price {
        color: red;
      }
    }

    .goods_number {
      width: px2rem(665);
      height: px2rem(50);
      display: flex;
      justify-content: space-between;
      line-height: px2rem(50);

      .number {
        width: px2rem(118);
      }

      .add_lower_number {
        width: px2rem(200);
        display: flex;

        .num {
          width: px2rem(100);
          text-align: center;
          border: px2rem(2) solid #dddddd;
        }

        .control {
          flex: 1;
          text-align: center;
          background-color: #999999;
          color: #fff;
        }
      }
    }

    .goods_Species {
      width: px2rem(541);
      height: px2rem(232);
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      span {
        padding: px2rem(15) px2rem(45);
        background-color: #dddddd;
        border-radius: px2rem(7);
        margin-right: px2rem(20);

        &.active {
          background-color: #ff9900;
          color: white;
        }
      }

      .last {
        display: flex;
      }

      .goods_Species_top {
        width: 100%;
        height: px2rem(93);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .goods_Species_bottom {
        width: 100%;
        height: px2rem(93);
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
}
</style>
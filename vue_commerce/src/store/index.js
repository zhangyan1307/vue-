import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Vant from 'vant';
import { Toast } from 'vant';
import 'vant/lib/index.css';
Vue.use(Vuex)
Vue.use(Vant);
Vue.use(Toast);
export default new Vuex.Store({
    state: {
        index: 0,
        num: []
    },
    mutations: {
        changeIndex(state, data) {
            state.index = data
        },
        changeNum(state, data) {
            state.num = data
        }
    },
    actions: {
        //商品添加
        addlist(context, obj) {
            axios.post(`/api/cartadd`, obj).then(res => {
                if (res.data.status == 1) {
                    Toast("添加成功")
                    context.dispatch("goodsList")
                } else {
                    Toast("添加失败")
                }
            })
        },
        //商品列表获取
        goodsList(context) {
            axios.get(`/api/cartlist?userid=${window.localStorage.getItem("id")}`).then(res => {
                console.log(res)
                context.commit("changeNum",res.data.data)
            })
        },
        //商品修改
        editGoodsList(context,obj){
            axios.post(`/api/cartedit`,obj).then(res=>{
                context.dispatch("goodsList")
            })
        }
    }
})
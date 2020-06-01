// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index.js'
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';
import "./util/flex.js"
import "./assets/base.styl"
import './assets/fonts/iconfont.css'
import { Swipe, SwipeItem,Field,Toast } from 'vant';

Vue.use(Vant);
Vue.use(Toast);
Vue.use(Swipe);
Vue.use(SwipeItem)
Vue.use(Field)
Vue.prototype.Toast=Toast
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

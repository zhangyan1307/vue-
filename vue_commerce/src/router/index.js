import Vue from 'vue'
import Router from 'vue-router'
import Class from '../pages/user/class/class'
import Car from '../pages/user/car/car'
import My from '../pages/user/my/my'
import Index from '../pages/user/index/index'
import Home from '../pages/user/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Detail from '../pages/detail/detail'
Vue.use(Router)

export default new Router({
  routes: [
     {path:'/',redirect:'/home/index'},
     {path:'/login',component:Login},
     {path:'/register',component:Register},
     {path:'/detail',component:Detail},
     {path:'/home',component:Home,children:[{
       path:'index',component:Index
     },{
       path:'class',component:Class
     },{
       path:'car',component:Car
     },{
       path:'my',component:My
     }]}
  ]
})

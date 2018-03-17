import Vue from 'vue'
import Router from 'vue-router'


import Header from "@/components/public/Header";
import Banner from "@/components/public/Banner";

import HomeView from "@/views/HomeView";

//登陆注册
import LoginView from "@/views/LoginView";
import RegistView from "@/views/RegistView";

//详情
import DetailView from "@/views/DetailView";
import DetailHome from "@/components/detail/DetailHome";
import DetailClassify from "@/components/detail/DetailClassify";





Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      children:[
        {
          path: '/banner',
          name: 'Banner',
          component: Banner
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/regist',
      name: 'regist',
      component: RegistView,
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailView,
      children:[
        {
          path: '',
          name: 'detailbody',
          component: DetailHome
        },
        {
          path: 'classify',
          name: 'detailclassify',
          component: DetailClassify
        }
      ]
    }
    
  ]
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import './styles/app.scss';

//全局状态管理vuex
import store from './vuex/store';

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

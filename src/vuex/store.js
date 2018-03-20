import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 这里只定义全局通用的状态
const store = new Vuex.Store({
    state : {
        currentPage: '',
        userInfo: {}
    },
    mutations: {
        getUserInfo(state,payload) {
            state.userInfo = payload;
            console.log('store用户信息:');
            console.log(state.userInfo);
        }
    }
})
export default store
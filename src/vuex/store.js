import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        islogin:'',
        cartList:[],
        currentPage:''

    },
    mutations: {
        checkUserInfo(state,payload) {
            state.islogin = payload
            console.log('store登陆注册确认结果：')
            console.log(state.islogin)
        },
        setCurrentPage(state,payload) {
            state.currentPage = payload;
            console.log(state.currentPage)
        },
        setCartList(state,payload) {
            state.cartList = payload
            console.log('购物车信息')
            console.log(state.cartList)
        },
    },
    actions: { //处理异步,通过context.commit调用mutations里的函数
        getCartList(context) { //context处理上下文
            axios.get('api/users/cartlist?id=123')
                .then((result) => {
                    context.commit('setCartList', result.data);
                })
        }
    }
    // mutations: { //mutations通过里边定义的函数修改state状态
    //     add(state,payload){ //参数，（state数据，形参载荷--传入参数）
    //         state.count.push(Math.floor(Math.random() * (10 - 1) + 1))
    //     },
    //     remove(state) {
    //         state.count.pop()
    //     },
    
    //     setCount(state, payload) {
    //         state.count = state.count.concat(payload)
    //     }
    // },
    // getters: { //相当于计算属性computed
    //     total(state) {
    //         return state.count.length
    //     },
    //     sum(state) {
    //         return state.count.reduce((a, b) => a + b, 0)
    //     },
    
    //     average(state, getters) {
    //         return parseInt(getters.sum / getters.total * 100, 10) / 100
    //     },
    // },
    // actions: { //处理异步,通过context.commit调用mutations里的函数
    //     getCount(context) { //context处理上下文
    //         axios.get('http://localhost:8090/api/count')
    //             .then((result) => {
    //                 context.commit('setCount', result.data);
    //             })
    //     }
    // }
})
export default store
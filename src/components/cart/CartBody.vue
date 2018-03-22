<template>
	<div class="cart-body">
        <ul>
            <li v-for ="(v,index) in cartList" :key="v.goodsCode">
                <div class="detail-top">
                    <div class="goods-img"><img :src="`${v.SmallPic}`" alt=""></div>
                    <div class="goods-info">
                        <p>{{v.goodsName}}</p>
                        <p>{{v.goodsCode}}</p>
                        <p>颜色/种类：{{v.goodsColor}}</p>
                        <p>￥{{v.OriginalPrice}}</p>
                    </div>
                    <div class="goods-num">
                        <input type="checkbox" checked="checked"/>
                    </div>
                </div>
                <div class="detail-down">
                    <span>数量</span>
                    <div>
                        <span @click="reduce(v,index)">-</span>
                        <input type="text" size="4" v-model="count" disabled="disabled" >
                        <span @click="add(v,index)">+</span>
                    </div>
                    <span><b>￥</b>{{(v.OriginalPrice*count).toFixed(2)}}</span>
                </div>
            </li>
        </ul>
	</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            count : '1',
            isSeletedAll: true,
            totalCount:0,
            total:0,
            cartList:'',
            userId: this.$route.query.userId
        }
    },
    mounted(){
        this.getCartList()
    },
    methods : {
        getCartList(){
            let params = { userId: this.userId}
            console.log(this.userId)
            let that = this
            axios.get('api/users/cart', {params})
            .then((res) => {
                console.log(res.data.RspData.userCart)
                that.cartList = res.data.RspData.userCart
            })
        },
        reduce(value,index) {
            this.count--;
            if(this.count<1) this.count = 1;
            console.log( this.cartList,Object.assign(this.cartList[index],{count:this.count}))
            this.$set(this.cartList,Object.assign(this.cartList[index],{count:this.count}))
        },
        add(value,index) {
            this.count++;
            if(this.count>999) this.count = 999;
            this.$set(this.cartList,Object.assign(this.cartList[index],{count:this.count}))
        },
        // deletePro(index){
        //     // this.$store.state.cartList.cartList.splice(index,1)
        //     let params = { index: index, userId: this.userId}
        //     console.log(index)
        //     let that = this
        //     axios.get('ggserver/api/cart/userCartDelOne', {params})
        //     .then((res) => {
        //         console.log(res)
        //         that.getCartList()
        //     })
        // },
        // modify(item,index) {
        //     this.count = item.count;
        //   this.$set(this.cartList,Object.assign(this.cartList[index],{isModify:!this.cartList[index].isModify}))
        // },
        
        // modifyOk(item,index) {
        //     this.$set(this.cartList,Object.assign(this.cartList[index],{isModify:!this.cartList[index].isModify}))
        //     this.cartList[index].count = this.count;
        //     this.cartList.map((item)=>item.isSeleted = true)
        //     this.totail = 0
        //     this.totailCount = 0
        //     this.count = item.count;
        //     let params = { index: index, userId: this.userId, count: this.count}
        //     let that = this
        //     axios.get('ggserver/api/cart/userCartModOne', {params})
        //     .then((res) => {
        //         console.log(res)
        //         that.getCartList()
        //     })
        // },
        // selected(item,index,curType) {
        //     this.$set(this.cartList,Object.assign(this.cartList[index],{isSeleted:!this.cartList[index].isSeleted}))
        //     if(item.isSeleted === false){
        //         this.totailCount += Number(item.count)
        //         this.totail += Number(item.price)* Number(item.count)
        //     }else{
        //         this.totailCount -= Number(item.count)
        //         this.totail -= Number(item.price)* Number(item.count)
        //     }
        // },
        // selectedAll() {
        //     this.isSeletedAll = !this.isSeletedAll
        //     this.cartList.map((item)=>item.isSeleted = this.isSeletedAll)
        //     if(this.isSeletedAll === false){
        //         let list = this.cartList
        //         for(let i in this.cartList){
        //             this.totail += Number(this.cartList[i].price) * Number(this.cartList[i].count)
        //             this.totailCount += Number(this.cartList[i].count) 
        //         }
        //     }else{
        //         this.totail = 0
        //         this.totailCount = 0
        //     }
            
        // },
        // back() {
        //     const curp = this.$store.state.currentPage;
        //     this.$router.push({name: 'detail',query:{}})
        // }
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/yo/usage/core/reset.scss'; 
.cart-body{
    width: 100%;
    height: 100%;
    padding:.1rem  .15rem;
    ul{
        @include flexbox();
        @include border(1px);
        @include flex-direction(column);  
        @include border-radius(.1rem) ; 
        width: 100%;
        padding: .1rem 0;
        background: #fff;
        height: auto;
        li{
            margin-top:.1rem;
            height: 1.15rem;
            width: 100%;
            @include border(0 0 1px 0);  
            @include flexbox();
            @include flex-direction(column);
            .detail-top{
                @include flex();
                @include flexbox();
                padding: 0 .1rem;
                width: 100%;
                .goods-img{     
                    width: .68rem;
                    height: .68rem;
                    @include border(1px);
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .goods-info{
                     @include flex();
                     height: 100%;
                     padding-left:.1rem;
                     p{
                        font-size: 12px;
                        color: #8d8d8d;
                         @include ellipsis();
                     }
                     p:nth-child(1){
                         color:#515052;
                         font-size: .14rem;
                     }
                     p:nth-child(4){
                         color:#515052;
                         font-size: .14rem;
                     }
                }
                .goods-num{
                    width: .22rem;
                    height: 100%;
                    input{
                        width: 100%;
                        height: .22rem;
                        margin-top:.2rem;
                    }
                }
            }
            .detail-down{
                @include border(1px 0 0 0,$border-style:dashed);
                height: .4rem;
                width: 100%;
                padding: 0 .08rem;
                @include flexbox();
                >span:nth-child(1){
                    width: .42rem;
                    height: 100%;
                    line-height: .42rem;
                    text-align: center;
                }
                >span:nth-child(3){
                    width: .7rem;
                    height: 100%;
                    line-height: .42rem;
                    text-align: center;
                    font-weight: 700;
                    color:#d91404;
                    b{
                       color: #515052
                    }
                }
                div{
                    @include flex();
                    @include flexbox();
                    @include align-items();
                    height: 100%;
                    span{
                        background: #eee;
                        @include flexbox();
                        @include border-radius(50%);
                        width: .3rem;
                        height: .3rem;
                        line-height: .3rem;
                        font-size: .2rem;
                        text-align: center;
                        padding-left:.08rem;
                    }
                    input{
                        border:none;
                        @include border(1px); 
                        @include border-radius(.02rem);
                        width: .3rem;
                        height: .3rem;
                        margin: 0 .1rem;
                        text-align: center;
                    }
                }
            } 
        }   
    }
}
</style>
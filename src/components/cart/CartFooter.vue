<template>
	<div class="cart-footer">
        <div class="foot-left">
            <p>总价：<span>￥8,310.00</span></p>
            <p><b>4</b>&nbsp;&nbsp;件</p>
            <p>运费：<span>￥0</span></p>
        </div>
        <div class="foot-right">
            <span>去结算</span>
        </div>
	</div>
</template>

<script>
	export default{
		methods: {
			goBack() {
				window.history.go(-1);
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../../styles/yo/usage/core/reset.scss'; 
.cart-footer{
    @include flexbox();
    width: 100%;
    height: 100%;
    .foot-left{
         @include flex();
         padding: .03rem 0;
         height: 100%;
         p{
            height: 33.333%;
            width: 100%;
            color:#333;
            padding:0 .1rem;
         }
         p:nth-child(1){
             text-align: right;
             span{
                 color:#d91404;
                 font-weight: 600;
             }
         }
         p:nth-child(2){
             b{
                 font-weight: 600;
             }
         }
         p:nth-child(3){
             text-align: right;
             span{
                 color:#d91404;
                 font-weight: 600;
             }
         }
    }
   .foot-right{
       width: .9rem;
       height: 100%;
       @include flexbox();
       @include justify-content();
       @include align-items();
       span{
            @include flexbox();
            @include border-radius(.05rem);
            width: 83px;
            height: 35px;
            line-height: 35px;
            color: #fff;
            background: #ff8400;
            padding-left:.15rem; 
            font-size: 16px;
            box-shadow: inset 0 -2px 0 #c06300;
       }
   }
}
</style>
<template>
	<div class="cart-header">
		<div class="return" @click="goBack">
			<span><i class="yo-ico">&#xe621;</i>返回</span>
		</div>
		<h3>购物车</h3>
		<div class="handle">
			<span>删除</span>
			<span>全不选</span>
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
.cart-header{
    @include flexbox();
    width: 100%;
    height: 100%;
    color: #333;
    font-size: 14px;
    .return{
        width: .9rem;
        height: 100%;
        color: #5b5b5d;
        line-height: .44rem;
        @include flexbox();
        padding-left: .1rem;
        i{
            font-weight: 600;
        }
    }
    h3{
       font-weight: bold;
       font-size: 18px;
       @include flex();
       text-align: center;
       line-height: .44rem;
       color:#666;
    }
    .handle{
        @include flexbox();
        width: .9rem;
        height: 100%;
        text-align: center;
        line-height: .44rem;
        color:#666;
        span{
            width: 50%;
            height: 100%;
            font-size: 14px;
            text-align: center;
        }
    }
}
</style>
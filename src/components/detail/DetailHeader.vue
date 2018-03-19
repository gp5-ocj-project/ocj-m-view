<template>
	<div class="detail-header">
		<div class="return" @click="goBack">
			<span><i class="yo-ico">&#xe621;</i>返回</span>
		</div>
		<h3>商品详情</h3>
		<div class="share">
			<span>分享</span>
			<i class="yo-ico">&#xe655;</i>
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
.detail-header{
    @include flexbox();
    width: 100%;
    height: 100%;
    color: #333;
    font-size: 14px;
    .return{
        width: .7rem;
        height: 100%;
        color: #5b5b5d;
        text-align: center;
        line-height: .44rem;
        font-weight:600;
        @include flexbox();
        @include justify-content();
		@include align-items();
    }
    h3{
       font-weight: bold;
       font-size: 18px;
       @include flex();
       text-align: center;
       line-height: .44rem;
       color:#666;
    }
    .share{
        width: .7rem;
        height: 100%;
        text-align: center;
        line-height: .44rem;
        color:#666;
        span{
            font-size: 12px;
            font-weight: 600;
        }
        i{
        	font-size: .24rem;
        }
    }
}
</style>
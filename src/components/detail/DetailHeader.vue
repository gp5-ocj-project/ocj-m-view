<template>
	<div class="detail-header">
		<div class="return">
			<i>1</i>
			<span>返回</span>
		</div>
		<h3>商品详情</h3>
		<div class="share">
			<span><router-link to="/detail/classify">分享</router-link></span>
			<i>1</i>
		</div>	
	</div>
</template>

<script>
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
    }
    h3{
       font-weight: bold;
       font-size: 18px;
       @include flex();
       text-align: center;
       line-height: .44rem;
    }
    .share{
        width: .7rem;
        height: 100%;
        text-align: center;
        line-height: .44rem;
        span{
            font-size: 12px;
        }
    }
}
</style>
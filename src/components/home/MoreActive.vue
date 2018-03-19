<!-- 更多活动 -->

<template>
	
	<div class="classifyactive">
		<div class="item">
			<div class="activeimg">
				<a href="">
					<img src="http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/9681/10901/1_20180314171047_34.jpg" alt="">
				</a>
			</div>
			<div class="activetitle">
				<div class="title">三月妇女节</div>
				<div class="activename">美丽绽放</div>
			</div>
		</div>
		<div class="item">
			<div class="activeimg">
				<a href="">
					<img src="http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/9681/10901/1_20180314171047_34.jpg" alt="">
				</a>
			</div>
			<div class="activetitle">
				<div class="title">三月妇女节</div>
				<div class="activename">美丽绽放</div>
			</div>
		</div>
		<div class="item">
			<div class="activeimg">
				<a href="">
					<img src="http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/9681/10901/1_20180314171047_34.jpg" alt="">
				</a>
			</div>
			<div class="activetitle">
				<div class="title">三月妇女节</div>
				<div class="activename">美丽绽放</div>
			</div>
		</div>
		<div class="item">
			<div class="activeimg">
				<a href="">
					<img src="http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/9681/10901/1_20180314171047_34.jpg" alt="">
				</a>
			</div>
			<div class="activetitle">
				<div class="title">三月妇女节</div>
				<div class="activename">美丽绽放</div>
			</div>
		</div>
		<div class="item">
			
		</div>
	</div>

</template>

<script>
	
</script>

<style lang="scss">

	@import '../../styles/yo/usage/core/reset.scss';

	.classifyactive{

		.item{
		    margin-top: 15px;
		    background-color: #ffffff;
		    border-bottom: 1px solid #d9d9d9;
		    width: 100%;
			
			.activeimg{
			    text-align: center;
			    height: auto;
			    width: 100%;
			    overflow: hidden;
			    font-size: 0;
			    position: relative;
				
				
			}
			.activetitle{
			    padding: 0 12px;
    			position: relative;
    			@include flexbox();
				@include justify-content(center); 
				@include align-content(center);
    			.title{
				    font-size: .14rem;
				    height: auto;
				    overflow: hidden;
				    color: #424242;
				    width: 100%;
				    padding: .1rem .05rem;
				    word-break: keep-all;
				    white-space: nowrap;
				    @include flex(1);
    			}
    			.activename{
    				@include flex(1);
    				text-align: right;
    				color: #e93131;
				    font-weight: bold;
				    padding: .1rem .05rem;
    			}
			}



		}

	}


	
</style>

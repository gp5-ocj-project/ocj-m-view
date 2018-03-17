<template>
	
	<mt-swipe :auto="3000">
	  <mt-swipe-item>
	  	<a href="">
			<img src="../../assets/images/banner/1_20160330152144_48.jpg" alt="">
		</a>
	  </mt-swipe-item>
	  <mt-swipe-item>
	  	<a href="">
			<img src="../../assets/images/banner/1_20160330152200_78.jpg" alt="">
		</a>
	  </mt-swipe-item>
	  <mt-swipe-item>
	  	<a href="">
  			<img src="../../assets/images/banner/1_20160330152218_65.jpg" height="400" width="1110" alt="">
		</a>
	  </mt-swipe-item>
	</mt-swipe>

</template>
<script>
	import { Swipe, SwipeItem } from 'mint-ui';

	export default{
		components: {
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem
		}
	}

</script>

<style lang="scss">
	.mint-swipe{
		width: 100%;
		height: 1.34rem;
		.mint-swipe-items-wrap{
			width:100%;
			height:100%;
			a{
				display: inline-block;
				height: 100%;
				width: 100%;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	
</style>

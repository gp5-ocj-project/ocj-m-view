<template>
	
	<div class="iconbox">
		<ul class="iconItem">
			<li v-for="(v, i) in icommenu1">
				<router-link :to="v.golink">
					<img :src="v.imgurl" alt="">
				</router-link>
				<span>{{v.title}}</span>
			</li>
		</ul>
		<ul class="iconItem">
			<li v-for="(v, i) in icommenu2">
				<router-link :to="v.golink">
					<img :src="v.imgurl" alt="">
				</router-link>
				<span>{{v.title}}</span>
			</li>
		</ul>

	</div>

</template>

<script>
	export default{
		data: () =>{
			return {

				icommenu1: [
					{
						golink: 'http://m.ocj.com.cn/shortvideo/dfcyx_list?domain_id=7781_6481_9544_1_12009_WASTE',
						imgurl: 'http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/9544/12009/1_20161129170724_43.png',
						title: '看视频'
					},
					{
						golink: '/list',
						imgurl: 'http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/9544/12009/2_20160509124952_100.png',
						title: '热销榜'
					},
					{
						golink: 'http://m.ocj.com.cn/shortvideo/dfcyx_list?domain_id=7781_6481_9544_1_12009_WASTE',
						imgurl: 'http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/9544/10764/3_20160517153903_30.png',
						title: '爆款团购'
					},
					{
						golink: 'http://m.ocj.com.cn/shortvideo/dfcyx_list?domain_id=7781_6481_9544_1_12009_WASTE',
						imgurl: 'http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/9544/12009/4_20160808160552_42.png',
						title: 'SMG商城'
					},
					{
						golink: '/login',
						imgurl: 'http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/9544/10764/5_20160527180448_53.png',
						title: '我的OCJ'
					},
				],
				icommenu2: [
					{
						golink: 'http://m.ocj.com.cn/shortvideo/dfcyx_list?domain_id=7781_6481_9544_1_12009_WASTE',
						imgurl: 'http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/9544/12009/6_20170621135304_97.png',
						title: '养生馆'
					},
					{
						golink: 'http://m.ocj.com.cn/shortvideo/dfcyx_list?domain_id=7781_6481_9544_1_12009_WASTE',
						imgurl: 'http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/9544/12009/7_20170424120240_26.png',
						title: '服饰镇'
					},
					{
						golink: 'http://m.ocj.com.cn/shortvideo/dfcyx_list?domain_id=7781_6481_9544_1_12009_WASTE',
						imgurl: 'http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/9544/12009/8_20161129170959_95.png',
						title: '家装馆'
					},
					{
						golink: 'http://m.ocj.com.cn/shortvideo/dfcyx_list?domain_id=7781_6481_9544_1_12009_WASTE',
						imgurl: 'http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/9544/12009/9_20170424122804_18.png',
						title: '全球购'
					},
					{
						golink: 'http://m.ocj.com.cn/shortvideo/dfcyx_list?domain_id=7781_6481_9544_1_12009_WASTE',
						imgurl: 'http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/9544/12009/10_20161129171222_15.png',
						title: '会员特价'
					},
				]

			}
		}
	}
</script>

<style lang="scss">
	@import '../../styles/yo/usage/core/reset.scss';
	.iconbox{
		width: 100%;
		background: #fff;
		margin-top: 0.03rem;
		padding-bottom: 0.01rem;
		@include border(0 0 .01rem 0, #eee, solid);
		.iconItem{
			@include flexbox();
			@include justify-content(space-between);
			@include align-items(center);
			@include flex-wrap(wrap);
			
			padding: 0 .1rem;

			padding-top: .20rem; 
			li{
				@include flex(1);
				text-align: center;
				a{
					display: inline-block;
					height: .45rem;
					width: .45rem;
					img{
						height: 100%;
						width: 100%;
					}
				}
				span{
					padding-top: .1rem;
					font-size: .12rem;
					display: inline-block;
				}

			}
		}
		.iconItem:nth-child(2){
			padding: .1rem; 
			@include border(0 0 0 2px, #eee)
		}
	}

</style>



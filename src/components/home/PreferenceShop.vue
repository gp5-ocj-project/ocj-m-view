
<!-- 商城优选 -->
<template>
	
	<div class="preference">
		<div class="htvtitle">
			<span class="title">正在直播</span>
			<span class="more">更多 <i class="yo-ico">&#xf07f;</i></span>
		</div>
		<ul class="goodsshow">
			<li v-for='(v,i) in goodList' class="goodsbox">
				<div class="goodsimg">
					<a :href="v.goodlink">
						<img :src="v.goodimg">
					</a>
				</div>
				<div v-if="i != 3 && i != 7" class="goodsImgLine"></div>
				
			</li>

		</ul>

	</div>

</template>
<script>
	export default{

		data: () => {
			return {
				goodList:[
					{
						goodlink:'http://m.ocj.com.cn/settle/m_shop/10345?domain_id=7781_6481_12081_2_14318_WASTE',
						goodimg: 'http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/12081/14318/2_20180202160151_14.jpg' 
					},
					{
						goodlink:'http://m.ocj.com.cn/settle/m_shop/10345?domain_id=7781_6481_12081_2_14318_WASTE',
						goodimg: 'http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/12081/14318/2_20180202160151_14.jpg' 
					},
					{
						goodlink:'http://m.ocj.com.cn/settle/m_shop/10345?domain_id=7781_6481_12081_2_14318_WASTE',
						goodimg: 'http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/12081/14318/2_20180202160151_14.jpg' 
					},
					{
						goodlink:'http://m.ocj.com.cn/settle/m_shop/10345?domain_id=7781_6481_12081_2_14318_WASTE',
						goodimg: 'http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/12081/14318/2_20180202160151_14.jpg' 
					},
					{
						goodlink:'http://m.ocj.com.cn/settle/m_shop/10345?domain_id=7781_6481_12081_2_14318_WASTE',
						goodimg: 'http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/12081/14318/2_20180202160151_14.jpg' 
					},
					{
						goodlink:'http://m.ocj.com.cn/settle/m_shop/10345?domain_id=7781_6481_12081_2_14318_WASTE',
						goodimg: 'http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/12081/14318/2_20180202160151_14.jpg' 
					},
					{
						goodlink:'http://m.ocj.com.cn/settle/m_shop/10345?domain_id=7781_6481_12081_2_14318_WASTE',
						goodimg: 'http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/12081/14318/2_20180202160151_14.jpg' 
					},
					{
						goodlink:'http://m.ocj.com.cn/settle/m_shop/10345?domain_id=7781_6481_12081_2_14318_WASTE',
						goodimg: 'http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/12081/14318/2_20180202160151_14.jpg' 
					},
				]

			}
		}

	}
</script>
<style lang="scss">

	

	@import '../../styles/yo/usage/core/reset.scss';
	.preference{
		width: 100%;
		background: #fff;
		@include clearfix();
		.htvtitle{
			text-align: center;
			@include border(0 0 .02rem 0, #ddd, solid);
			height: .35rem;
			line-height: .35rem;
			.title{
				font-size: .14rem;
				display: inline-block;
				color: #424242;
				padding-left: .28rem;
				background: url('http://cdnimg.ocj.com.cn/image_site/shop/conts/7781/6481/12081/14318/1_20170606091858_62.jpg') left center no-repeat;
				background-size: 26px;
			}
			.more{
				float: right;
				font-size: .1rem;
				padding-right: 15px;

				i{
					line-height: .24rem;
					color: #e89898;
					font-weight: 700;
				}
			}	
		}

		.goodsshow{
		    padding: 0 10px 10px 10px;
		    margin-bottom: .05rem;
		    background: #fff;

		    .goodsbox{
	    	    float: left;
			    width: 23%;
			    margin: 0 1%;
			    @include clearfix();

			    .goodsimg{
		    	    float: left;
				    position: relative;
				    line-height: 0;
				    text-align: center;
				    a{
			    	    width: 100%;
					    height: 100%;
					    border: none;
					    text-decoration: none;
					    color: inherit;
				    }
				    img{
			    	    width: 100%;
					    height: auto;
					    border: none;
				    }
			    }
			    .goodsImgLine{ 
		    	    float: left;
				    margin-top: 35%;
				    height: 62px;
				    @include border(0 .01rem 0 0 , #c2c2c2, solid);
			    }
		    }
		    
		}



	}
	
</style>
<!-- 正在直播 -->

<template>
	
	<div class="htvshow">
		<div class="htvtitle">
			<span class="title">正在直播</span>
			<span class="more">更多 <i class="yo-ico">&#xf07f;</i></span>
		</div>
		<ul class="living">
			<li>
				<h5>
					<i>
						<img src="http://m.ocj.com.cn/common/mobile_phone/cssimage/indeximg/tvgouwulogo.png" alt="">
					</i>
					<span>直播中</span>
				</h5>
				<div class="livebox">
					<div class="liveimg">
						<img src="http://cdnimg.ocj.com.cn/item_images/item/15/22/0510/15220510-L.jpg" alt="">
					</div>
					<div class="livevideo">
						<div class="videoplay">
							<img src="http://m.ocj.com.cn/common/mobile_phone/cssimage/tvshopping/playbutton3.png" alt="">
						</div>
					</div>
					<p>直播中 | 3月17日 17:30</p>
				</div>
				<div class="livedesc">
					<div class="title">[迎春好礼]银京 南美白对吓吓仁</div>
					<div class="title integral">[加赠4.96积分]</div>
					<div class="explain">
						<span class="price">
							<i>￥</i>1143
							<del></del>
						</span>

						<span class="tipj">
							<i>积</i>
						</span>
						<span class="score">37.79</span>
						<span class="detail">查看详情</span>
					</div>
				</div>
			</li>
			<li>
				<h5>
					<i>
						<img src="http://m.ocj.com.cn/common/mobile_phone/cssimage/indeximg/tvgouwulogo.png" alt="">
					</i>
					<span>直播中</span>
				</h5>
				<div class="livebox">
					<div class="liveimg">
						<img src="http://cdnimg.ocj.com.cn/item_images/item/15/22/0510/15220510-L.jpg" alt="">
					</div>
					<div class="livevideo">
						<div class="videoplay">
							<img src="http://m.ocj.com.cn/common/mobile_phone/cssimage/tvshopping/playbutton3.png" alt="">
						</div>
					</div>
					<p>直播中 | 3月17日 17:30</p>
				</div>
				<div class="livedesc">
					<div class="title">[迎春好礼]银京 南美白对吓吓仁</div>
					<div class="title integral">[加赠4.96积分]</div>
					<div class="explain">
						<span class="price">
							<i>￥</i>1143
						</span>

						<span class="tipj">
							<i>积</i>
						</span>
						<span class="score">37.79</span>
						<span class="detail">查看详情</span>
					</div>
				</div>
			</li>
		</ul>
	</div>

</template>

<script>
	export default{
		data: () => {
			return {
				dateTime: Date.now()
			}
		}
	}
</script>

<style lang="scss">
	@import '../../styles/yo/usage/core/reset.scss';

	.htvshow{
		width: 100%;
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
				background: url('http://cdnimg.ocj.com.cn/common/mobile_phone/cssimage/tvshopping/iconLive.png') left center no-repeat;
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
		
		.living{

			li{
				background: #fff;
				h5{
					padding: .09rem .12rem;
					text-align: left;
					i{
						display: inline-block;
						background: #f12e24;
						width: .3rem;
						height: .3rem;

						img{
							height: 100%;
							width: 100%;
						}
					}
					span{
					    padding-right: 15px;
						font-size: .14rem;
						color: #333;
						font-weight: normal;
					}
				}
			
				.livebox{
					position: relative;
					height: 1.8rem;
					@include clearfix();
					.liveimg{
					    text-align: center;
					    height: 1.70rem;
					    width: 100%;
					    font-size: 0;

					    img{
					    	height: 100%;
					    	width: auto;
					    }
					}
					.livevideo{
						position: absolute;
					    left: 0;
					    top: 0;
					    width: 100%;
					    height: 100%;
					    background: rgba(0,0,0,0.6);
					    .videoplay{
					    	position: absolute;
						    width: 35px;
						    top: 35%;
						    left: 50%;
						    margin-left: -17px;
						    img{
					    	    width: 100%;
							    height: auto;
							    border: none;
						    }
					    }
					}
					p{
						display: inline-block;
			    	    position: absolute;
				    	padding: 0 .08rem;
				    	top: 63%;
				    	left: 28%;
				    	margin: 0 auto;
				    	color: #fff;
				    	font-size: .12rem;
				    	line-height: .2rem;
				    	text-align: center;
						border: 1px solid #fff;
				    	@include border-radius(.25rem);
				    }
				}

				.livedesc{
					padding: 0 12px;
    				position: relative;

    				.title{
					    font-size: .13rem;
					    height: auto;
					    overflow: hidden;
					    color: #424242;
					    width: 100%;
					    margin: 5px 0;
					    word-break: keep-all;
					    white-space: nowrap;

    				}
    				.integral{
						color: #ff8400;
    				}
    				.explain{
					    margin-top: 5px;
   					 	margin-bottom: 5px;
						.price{
							font-size: .15rem;
						    color: #e93131;
						    font-family: "Arial";
						    float: left;
						    display: inline;
						    font-weight: bold;
						    i{
					    	    font-size: .14rem;
						    }
						}
						.tipj{
						    font-size: .1rem;
						    color: #ffffff;
						    background: #ff8400;
						    margin-top: 0;
						    float: left;
						    display: inline;
						    text-align: right;
						    margin-left: 3px;

						}
						.score{
							color: #ff8400;
						    position: relative;
						    top: 2px;
						    padding-left: .05rem;

						}
						.detail{
							display: block;
							position: absolute;
							padding: 2px 5px;
							width: auto;
							height: auto;
							bottom: 3px;
							right: 12px;
							color: #e93131;
							font-size: .12rem;
							border: #e93131 1px solid;
							border-radius: 4px;
						}
	
    				}


				}
			}
		}

		
	}
</style>



<template>
	<div class="good-list">
		<ul>
			<router-link tag="li" to="/detail" v-for="(v, i) in goodList" :key="i">
				<div class="CommodityContent" >
					<div class="CommodityTip">
						<div class="tipbox bgtv">
							<div class="tiptitle">
								<img src="http://m.ocj.com.cn/common/mobile_phone/cssimage/indeximg/tvgouwulogo.png">
							</div>
							<div class="tipintro">
								TV商品
							</div>
						</div>
					</div>
					<div class="CommodityLogo">
						<img src="http://cdnimg.ocj.com.cn/images/brandshop/mall/SP0840600.gif" width="123" height="52" onerror="removeObj(this)">
					</div>
					<div class="CommodityImg">
						<a href="/detail/15221004?domain_id=7781_6481_9545_1_10781_WASTE">
							<img :data-src="v.RspData.data.Pictures[0]" :src="v.RspData.data.Pictures[0]" class=" lazyloaded">
						</a>
					</div>
				</div>
				<div class="CommodityIntro">
					<a href="http://m.ocj.com.cn/detail/15221004?domain_id=7781_6481_9545_1_10781_WASTE">
						<div class="title">{{v.RspData.data.CommodityName}}</div>
					</a>
					<div class="hintro"></div>
					<div class="hmoneytipBox">
						<div class="hzhekouBox"></div>
						<div class="hmoney">
							<span>￥</span>
							{{v.RspData.data.OriginalPrice}}
						</div>
						<div class="hyouhuiicon">
							<span class="htipcx">促</span>
							<span class="htipjf">积</span>
						</div>
					</div>
				</div>
			</router-link>
			<li>
				<div class="CommodityContent">
					<div class="CommodityTip">
						<div class="tipbox bgtv">
							<div class="tiptitle">
								<img src="http://m.ocj.com.cn/common/mobile_phone/cssimage/indeximg/tvgouwulogo.png">
							</div>
							<div class="tipintro">
								TV商品
							</div>
						</div>
					</div>
					<div class="CommodityLogo">
						<img src="http://cdnimg.ocj.com.cn/images/brandshop/mall/SP0840600.gif" width="123" height="52" onerror="removeObj(this)">
					</div>
					<div class="CommodityImg">
						<a href="/detail/15221004?domain_id=7781_6481_9545_1_10781_WASTE">
							<img data-src="http://cdnimg.ocj.com.cn/item_images/item/15/22/1004/15221004-L.jpg" src="http://cdnimg.ocj.com.cn/item_images/item/15/22/1004/15221004-L.jpg" class=" lazyloaded">
						</a>
					</div>
				</div>
				<div class="CommodityIntro">
					<a href="http://m.ocj.com.cn/detail/15221004?domain_id=7781_6481_9545_1_10781_WASTE">
						<div class="title">[迎春好礼]一只鼎 野生黄泥螺蟹股金牌美味组</div>
					</a>
					<div class="hintro"></div>
					<div class="hmoneytipBox">
						<div class="hzhekouBox"></div>
						<div class="hmoney">
							<span>￥</span>
							203
						</div>
						<div class="hyouhuiicon">
							<span class="htipcx">促</span>
							<span class="htipjf">积</span>
						</div>
					</div>
				</div>
			</li>
		</ul>


	</div>


</template>


<script>
	import axios from 'axios';
	export default {
		data: () => {
			return {
				goodList: [
					
				]
			}
		},

		mounted(){
			var count = 0;
			axios({
				url: '/api/goods/list/' + count
			}).then((result) => {
				this.goodList = result.data.data.result;
			}).catch(() => {return '加载失败 :(.....'})
		},
		methods: {

			
		}



	}


</script>

<style lang='scss'>
	@import '../../styles/yo/usage/core/reset.scss';
	.good-list{
		ul{
			li{
				margin-bottom: 15px;
			    background-color: #ffffff;
			    border-bottom: 1px solid #d9d9d9;
			    width: 100%;
			    position: relative;
			    .CommodityContent{
				    text-align: center;
				    height: auto;
				    width: 100%;
				    overflow: hidden;
				    font-size: 0;
				    
					
					.bgtv{
						background-color: #df1f1e;
					}
					.bggroupbuy{
					    background-color: #ff4900;

					}
					.bgfood{
					    background-color: #984d2e
					}
		
				    .CommodityTip{
			    	    position: absolute;
					    top: 0;
					    left: .12rem;
					    width: .56rem;
					    height: auto;

					    .tipbox{
				    	    position: relative;
						    width: .56rem;
						    height: .56rem;
						    margin-bottom: .1rem;
						    .tiptitle{
					    	    text-align: center;
							    font-size: .14rem;
							    color: #ffffff;
							    width: 100%;
							    height: .36rem;
							    line-height: .36rem;
							    overflow: hidden;
							    img{
							    	width: 40px;
    								vertical-align: middle;
    								height: auto;
   									border: none;
							    }
						    }
					    }
					    .tipintro{
					    	width: 100%;
						    height: .2rem;
						    line-height: .2rem;
						    text-align: center;
						    padding: 0;
						    font-size: .1rem;
						    color: #ffffff;
						    background: rgba(0, 0, 0, 0.3);
					    }
				    }

				    .CommodityLogo{
			    	    position: absolute;
					    top: 0;
					    right: 12px;
					    text-align: right;
					    margin-top: 16px;
					    img{
				    	    width: 70px;
    						height: auto;
					    }
				    }
				    .CommodityImg{
			    	    text-align: center;
					    height: 170px;
					    width: 100%;
					    overflow: hidden;
					    font-size: 0;
					    a{
				    	    width: 100%;
						    height: 100%;
						    border: none;
						    text-decoration: none;
						    color: inherit;
						    img{
					    	    height: 100%;
    							width: auto;
						    }
					    }
				    }
				}

				.CommodityIntro{
				    padding: 0 12px;
				    position: relative;
				    @include calc(width, "100% - 24px");
				    a{
				    	width: 100%;
					    height: 100%;
					    border: none;
					    text-decoration: none;
					    color: inherit;
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
				    }
				    .hintro{
				    	font-size: .11rem;
					    height: auto;
					    overflow: hidden;
					    color: #9d9d9d;
					    width: 100%;
					    margin: 5px 0;
					    word-break: keep-all;
					    white-space: nowrap;
				    }
				    .hmoneytipBox{
			    	    margin-top: 5px;
    					margin-bottom: 5px;
    					@include clearfix();

    					.hzhekouBox {
							font-size: .15rem;
							color: #e63235;
							float: right;
							display: inline;
							font-weight: bold;
							font-family: "Arial";
							
						}
						.hmoney {
						    font-size: .15rem;
						    color: #e93131;
						    font-family: "Arial";
						    float: left;
						    display: inline;
						    font-weight: bold;
						    span {
							    font-size: .13rem;
							}
						}
						.hyouhuiicon {
						    font-size: .1rem;
						    color: #ffffff;
						    margin-top: 0;
						    float: left;
						    display: inline;
						    text-align: right;
						    margin-left: 3px;
						    span{
					    	    margin: 0 0 0 2px;
								padding: 1px 1px 1px 1px;
						    }
						    .htipcx {
							    background-color: #d91404;
							}
							.htipjf {
							    background-color: #ff8400;
							}	
						}
				    }
				}
			}	
		}
	}

</style>

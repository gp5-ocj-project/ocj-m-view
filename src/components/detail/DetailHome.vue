<template>
	<div class="detail-home">
		<div class="detail-banner">
			<mt-swipe :auto="0" :show-indicators="false" >
			  <mt-swipe-item  v-for= "(v) in Pictures" :key="v"><img :src="`${v}`"/></mt-swipe-item>
			</mt-swipe>
			<div class="detailBannerNum">
				<span class="detailBannerCurrentNum">1</span>
				/<span class="detailBannerTotalNum">{{Pictures.length}}</span>
			</div>
			<div class="detailGoodsNum">货号：{{data.CommodityCode}}</div>
		</div>
		<div class="detailCommodityIntro">
			<div class="detailCommodityTitle">
				{{data.CommodityName}}
			</div>
			<div class="detailCommodityPrice"><i>￥</i>{{data.CommodityPrice}}</div>
		</div>
		<div class="detailOptionBox">
			<div>
				规格选择 &nbsp;&nbsp;&nbsp;&nbsp;已选：默认 "1件"
			</div>
			<i class="yo-ico">&#xe61e;</i>
		</div>
		<div class="detailAddressBox">
            <div >
                <p>配送至</p>
                <span class="detailAddressShow" id="area_sel">请选择配送地区:&nbsp;&nbsp;&nbsp;&nbsp;{{data.ShippingAddress}}</span>      
            </div>
           <i class="yo-ico">&#xe61e;</i>
       </div>
       <div class="detailScoreBox">
           <div class="detailScoreBoxTitle">
           		<span>商品评价</span>
           		<span>{{TopOneYgmCommodityVote.ProductEvaluate}}条评论</span>
           		<span>综合评分</span>
           		<span>AAAAA</span>
           		<i class="yo-ico">&#xe61e;</i>
        	</div>
          	<div class="detailScoreContent">
           		<div class="detailScoreContentName">
           			<span>{{TopOneYgmCommodityVote.UserName}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span></span>
           		</div>
           		<div class="detailScoreContentText">{{TopOneYgmCommodityVote.CommentContent}}</div>  
        	</div>
        </div>
		<div class="detailNoticeBox">
        	<div class="detailNoteIcon_zheng">
        		<div>
        			<i class="yo-ico">&#xe65e;</i>
        			<span>正品保障</span>
        		</div>
        		<div>
        			<i class="yo-ico">&#xe7b5;</i>
        			<span>东东客服</span>
        		</div>
        	</div> 
            <div class="detailNoteIcon_tui">商品一经售出，若无质量问题，不接受7天无理由退换货</div>
      </div>
      <div class="checkgoodsinfo"><router-link :to="`/detail/${goodsId}/classify`" tag="span">查看商品信息</router-link></div>
	</div>
</template>

<script>
	import { Swipe, SwipeItem , Loadmore } from 'mint-ui';
	import axios from 'axios';
	export default {
		data:() => {
			return {
                detailData:'',
                Pictures:'',
                goodsId:'',
                data:'',
                TopOneYgmCommodityVote:''
			}
		},
		mounted() {
        
            this.getGoodsDetail();
        },
        methods: {
            getGoodsDetail () {
                let goodsId = this.$route.params.id;
                this.goodsId = goodsId;
                axios.get('/api/goods/item/'+goodsId)
                    .then((res) =>{
                        console.log(res.data.data.RspData);
                        this.detailData = res.data.data.RspData;
                        this.Pictures = res.data.data.RspData.data.Pictures;
                        this.data=res.data.data.RspData.data;
                        this.TopOneYgmCommodityVote = res.data.data.RspData.TopOneYgmCommodityVote
                    })
            }
        },
		components: {
			[Swipe.name]:Swipe,
			[SwipeItem.name]:SwipeItem,
			[Loadmore.name]:Loadmore
		}
		
	}
</script>

<style lang="scss" scoped>
@import '../../styles/yo/usage/core/reset.scss'; 
.detail-home{
    @include flexbox();
    @include flex-direction(column); 
    width: 100%;
    overflow-y: scroll;  
    .detail-banner{
        @include border(1px 0 0 0);
        position: relative;
        height: 3.2rem;
        width: 100%;
        .mint-swipe{
             min-height: 3.2rem !important;  
             img{
                height: 100%;
                width: 100%;  
            }
        }
       
        .detailBannerNum{
            position: absolute;
            bottom: 10px;
            right: 18px;
            font-size: 15px;
            width: 48px;
            height: 48px;
            border-radius: 100px;
            line-height: 48px;
            color: #fff;
            text-align: center;
            background: rgba(0,0,0,.35);
        }
        .detailGoodsNum {
            position: absolute;
            bottom: 10px;
            left: 10px;
            padding: 0 12px;
            color: #fff;
            font-size: 12px;
            border-radius: 8px;
            line-height: 18px;
            background: rgba(0,0,0,.35);
        }
    }
    .detailCommodityIntro{
        @include border(1px 0 1px 0);
        height: .66rem;
		padding: .1rem;
		background: #fff;
        .detailCommodityTitle{
            color: #535353;
            font-size: 16px;
            line-height: 23px;
            overflow: hidden;
        }
        .detailCommodityPrice{
            color: #d91404;
            font-size: 16px
        }
    }
    .detailOptionBox{
        @include border(1px 0 1px 0);
        @include flexbox();
        width: 100%; 
        margin-top: .05rem;
        line-height: .45rem;
        padding: 0 .1rem;
		font-size: 12px;
		background: #fff;
        div{
           @include flex(); 
        }
       i{
            width: 8%;
            font-size: .2rem;
            color:#535353;
        }
        
    }
    .detailAddressBox{
        @include border(1px 0 1px 0);
        @include flexbox();
        height: .56rem;
        width: 100%;
        padding:0 .1rem;
        margin-top: .05rem;
		font-size: 12px;
		background: #fff;
        div{
            @include flex();
            @include flexbox();
            @include flex-direction(column);
            p{
                height: 50%;
                font-size: 13px;
                color:#707070;
                line-height: .23rem;
            } 
            span{
                height: 50%;
                line-height: .23rem;
            } 
        }
        i{
            width: 8%;
            padding-top: .12rem;
            font-size: .2rem;
            color:#535353;
        }
        
    }
    .detailScoreBox{
        @include border(1px 0 1px 0);
        @include flexbox();
        @include flex();
        @include flex-direction(column);
        height: 1.08rem;
        width: 100%;
        margin: .1rem 0;
		font-size: 12px;
		background: #fff;
        .detailScoreBoxTitle{
            @include flexbox();
            height: .43rem;
            width: 100%;
            padding: .1rem;
            span{
                width: 23%;    
            }
            i{
                @include flex();
                font-size: .2rem;
            	color:#535353;
            }
        }
        .detailScoreContent{
            @include flex();
            @include flexbox();
            @include flex-direction(column);
            @include border(1px 0 0 0);
            width: 100%;
            padding: .1rem;
            .detailScoreContentName{
                font-size: 14px;
                height: 50%;
            }
            .detailScoreContentText{
                @include ellipsis();
                width: 100%;
                height: 50%;
                
            }
        }
    }
    .detailNoticeBox{
        @include flexbox();
        @include flex-direction(column);
        height: .7rem;
        width: 100%;
        padding: .05rem .11rem;
        background: #e3e3e3;
        font-size:12px; 
        color:#999;
        i{
        	font-size: .15rem;	
        }
        .detailNoteIcon_zheng{
            @include flexbox();
            line-height: .35rem;
            height: 50%;
            width: 100%;
            div{
                width: 25%;
            }
        }
        .detailNoteIcon_tui{
            height: 50%;
            width: 100%;
            line-height: .35rem;
            
        }
    }
    .checkgoodsinfo{
   		height: .3rem;
   		width: 100%;
   		line-height: .3rem;
   		text-align: center;
   		color:#666;
   	}
   
}

</style>


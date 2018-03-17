<template>
	<div class="detail-classify">
			<div class="nav">
				<mt-navbar v-model="selected">
					<mt-tab-item id="1">图片详情</mt-tab-item>
					<mt-tab-item id="2">商品详情</mt-tab-item>
					<mt-tab-item id="3">评价</mt-tab-item>
				</mt-navbar>
			</div>
			<div class="detail-classify-con">
					<mt-tab-container v-model="selected">
					<mt-tab-container-item id="1">
							<goods-images></goods-images>
					</mt-tab-container-item>
					<mt-tab-container-item id="2">
						<goods-info></goods-info>
					</mt-tab-container-item>
					<mt-tab-container-item id="3">
						<goods-assess></goods-assess>
					</mt-tab-container-item>
				</mt-tab-container>
			</div>
	</div>
</template>

<script>
	import { Navbar, TabItem,TabContainer, TabContainerItem} from 'mint-ui';
	import GoodsImages from './GoodsImages';
	import GoodsInfo from './GoodsInfo';
	import GoodsAssess from './GoodsAssess';
	export default {
		data:() => {
			return {
				selected:'1'
			}
		},
		components: {
			[Navbar.name]:Navbar,
			[TabItem.name]:TabItem,
			[TabContainer.name]:TabContainer,
			[TabContainerItem.name]:TabContainerItem,
			GoodsImages,
			GoodsInfo,
			GoodsAssess
		}
	}
</script>

<style lang="scss" scoped>
@import '../../styles/yo/usage/core/reset.scss'; 
.detail-classify{
	 	@include flexbox();
    @include flex-direction(column);
    width: 100%;
    height: 100%;
		.nav{
			height: .36rem;
			width: 100%;
			.mint-navbar{
        height: .36rem;
        width: 100%;
        line-height: .36rem;
        color:red;
			}
			.mint-tab-item{
					box-sizing: border-box !important;
			}
			.is-selected {
        border-bottom: 2px solid #f00 !important;
        color: #f12e24 !important; 
        margin-bottom: 0 !important;
        border-bottom-width: 50% !important;
			}
			a{
					color: #666;
			}
		}
  
	.detail-classify-con{
			 @include flex();
			 width: 100%;
			 .mint-tab-container{
        @include flex();
        background-color: #ebebeb;
        width: 100%;
        .mint-tab-container-wrap,.mint-tab-container-item{
            width: 100%;
            height: 100%;
        }
    }
	}
    
    
}
</style>


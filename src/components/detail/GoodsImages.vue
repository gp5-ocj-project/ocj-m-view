<template>
    <ul class="goods-imgs">
        <li v-for= "v in Pictures" :key="v"><img :src="`${v}`" alt=""/></li>
    </ul>
</template>

<script>
    import { Swipe, SwipeItem , Loadmore } from 'mint-ui';
	import axios from 'axios';
	export default {
		data:() => {
			return {
                detailData:'',
                goodsId:'',
                Pictures:'',
                data:'',
                TopOneYgmCommodityVote:''
			}
		},
		mounted() {
           this.goodsId = this.$route.params.id;
           axios.get('/api/goods/detail/'+this.goodsId)
            .then((res) =>{
                this.detailData = res.data.RspData;
                this.Pictures = res.data.RspData.data.Pictures;
                this.data=res.data.RspData.data;
                this.TopOneYgmCommodityVote = res.data.RspData.TopOneYgmCommodityVote
                console.log(res.data.RspData.data.CommodityName)
            })
        }
    }
</script>

<style lang="scss" scoped>
@import '../../styles/yo/usage/core/reset.scss';
 .goods-imgs{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    li{
        width: 100%;
        img{
            width: 100%;
        }
    }
}
</style>
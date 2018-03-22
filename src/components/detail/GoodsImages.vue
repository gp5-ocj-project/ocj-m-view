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
                Pictures:'',
			}
		},
		mounted() {
           let goodsId = this.$route.params.id;
           axios.get('/api/goods/item/'+goodsId)
            .then((res) =>{
                this.Pictures = res.data.data.RspData.data.Pictures;
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
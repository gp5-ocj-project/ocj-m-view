<template>
	<div class="detail-footer">
		<div>
			<i class="yo-ico">&#xe606;</i>
			<span>客服</span>
		</div>
		<div>
			<i class="yo-ico">&#xe603;</i>
			<span>收藏</span>
		</div>
		<div>
			<span @click="addCart">
			加入购物车
			</span>
			<span>
				立即购买
			</span>	
		</div>
		
	</div>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default {
        data: () => {
            return {

            }
        },
        methods: {
            addCart() {
                console.log(this.$store.userInfo)
                let  checkToken = true;
                if(checkToken){
                     Toast({
                        message:'加入购物车成功',
                        duration: 1000
                    });
                    this.$router.push({path: '/cart/?userId=123456'});
                }else{
                     Toast({
                        message:'请您先登陆！',
                        duration: 1000
                    });
                    // console.log(this.$router.history.current.path);
                   this.$store.commit('setCurrentPage',this.$router.history.current.path);
                   this.$router.push({path: '/login'});
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../styles/yo/usage/core/reset.scss'; 
.detail-footer{
    height: 100%;
    width: 100%;
    @include flexbox();
    
    div{
        height: 100%;
        width: .53rem;
        @include flexbox();
        font-size: 12px; 
        i{
        	font-size: .2rem;
        	color:#999;
        }
    }
    div:first-child{
        @include justify-content();
        @include align-items();
        @include flex-direction(column);
        @include border(0 1px 0 0);
    }
    div:nth-child(2){
        @include justify-content();
        @include align-items();
        @include flex-direction(column);
    }
    div:last-child{
       @include flex();  
       span{
           width: 50%;
           height: 100%;
           text-align: center;;
           line-height: .44rem;
           color:#fff;
           background: #1289c8;
           font-size: 16px;
       } 
       span:last-child{
           background: #e62a2a;
       }
    }
    
}
</style>
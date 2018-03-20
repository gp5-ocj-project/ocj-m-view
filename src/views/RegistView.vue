<template>
    <div class="regist-page">
        <div class="regist-header">
            <div class="return"  @click="goBack">
                <span><i class="yo-ico">&#xe621;</i>返回</span>
            </div>
            <h3>注册</h3>
            <div class="area">
                <span></span>
            </div>	
	    </div>
         <div class="regist-content">
              <p><input type="text" v-mode="username" placeholder="请输入手机号"/></p>
              <div class="input-code">
                <p><input type="password"  v-mode="password" placeholder="请输入密码" /></p>
              </div>
              <div class="regist-agree"><input type="radio"/><span>同意</span>《东方购物网络使用条款》</div>
              <div class="regist-btn">
                  <mt-button type="primary" @click.prevent="checkAllInfo">立即注册</mt-button>
              </div>
         </div>
    </div>
</template>

<script>
    import { Button,Toast } from 'mint-ui';
    import axios from 'axios';
    export default {
         data:() => {
            return {
                username:'',
                password:''
            }
        },
        components: {
            [Button.name]:Button
        },
        methods: {
			goBack() {
				window.history.go(-1);
            },
            checkAllInfo() {
                let that = this;
				let allInfo = {
					username: this.username,
					password: this.password,
                }
                axios.get('/api/users/signup',allInfo)
					.then(function( res){
						if(res.data.data.success){
							Toast({
								message:'注册成功！',
								duration: 2000
							});
							//将用户信息存到vuex
							that.$store.commit('getUserInfo',res.data.data);
						}else{
							Toast({
								message:'该用户已存在，请重新注册！',
								duration: 2000
							});
						}
					})
					.catch(function(err){
					    Toast({
                            message:'网络错误！',
                            duration: 2000
                        });
					})
            }
		}
    }
</script>

<style lang="scss" scoped>
@import '../styles/yo/usage/core/reset.scss';  

.regist-page{
    width: 100%;
    height: 100%;
    @include flexbox();
    @include flex-direction(column);
    .regist-header{
        width: 100%;
        height:.44rem;
        color: #333;
        font-size: 14px;
        @include flexbox();
        .return{
            width: .7rem;
            height: 100%;
            color: #5b5b5d;
            text-align: center;
            line-height: .44rem;
            font-weight: 600;
            color:#707070;
            
        }
        h3{
           font-weight: bold;
           font-size: 18px;
           @include flex();
           text-align: center;
           line-height: .44rem;
           color:#707070;
        }
        .area{
            width: .7rem;
            height: 100%;
            text-align: center;
            line-height: .44rem;
            span{
                font-size: 12px;
            }
        }
    }
    .regist-content{   
        @include flex();
        padding: 0 .23rem;
        width: 100%;
        >p{
            margin-top: .2rem;
            height: .36rem;
            width: 100%;
            @include border(1px);
            @include border-radius(.15rem);
            input{
                width: 100%;
                height: 100%;
                border:0;
                padding: 0 .15rem;
                font-size: .12rem;
            }
        }
        .input-code{
            margin-top: .2rem;
            height: .36rem;
            width: 100%;
            @include flexbox();
            p{
                height: 100%;
                width:100%;
                @include border(1px);
                @include border-radius(.15rem);
                input{
                    width: 100%;
                    height: 100%;
                    border:0;
                    padding: 0 .15rem;
                    font-size: .12rem;
                }
            }
        }
        .regist-agree{
            margin-top: .15rem;
            height: .4rem;
            width: 100%;
            font-size: .12rem;
        }
        .regist-btn{
            margin-top: .15rem;
            height: .4rem;
            width: 100%;
            button{
                width: 100%;
                color:#fff;
            }
        }
    }
}
</style>

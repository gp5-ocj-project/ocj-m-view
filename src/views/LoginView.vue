<template>
    <div class="login-page">
        <div class="login-header">
            <div class="return" @click="goBack">
               <span><i class="yo-ico">&#xe621;</i>返回</span>
            </div>
            <h3>快速登陆</h3>
            <div class="area">
                <span>地区设置</span>
            </div>	
	    </div>
        <div class="login-content">
            <div class="login-box">
                <p><input type="text" v-model="username" placeholder="请输入手机号"/></p>
                <p>
                    <input :type="pswshow" v-model="password" placeholder="请输入密码" />
                    <span @click="pswControl"><i class="yo-ico">&#xe681;</i></span>
                </p>
                <div class="btn">
                    <span><mt-button type="primary" @click.prevent="checkAllInfo">立即登陆</mt-button></span>
                    <span><mt-button type="primary" >动态登陆</mt-button></span>
                </div>
                <div class="go-link"><span>找回密码</span><router-link tag="span" to="/regist">立即注册</router-link></div>
            </div>
            <div class="relation">
                <p><span>合作网站账号登陆</span></p>
                <ul>
                    <li><img src="../assets/images/detail/icon_weibo.png" alt=""/></li>
                    <li><img src="../assets/images/detail/icon_alipay.png" alt=""/></li>
                    <li><img src="../assets/images/detail/icon_qq.png" alt=""/></li>
                </ul>
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
                password:'',
                isShow:true,
                pswshow:'password'
            }
        },
        components: {
            [Button.name]:Button
        },
        methods: {
            //返回
			goBack() {
				window.history.go(-1);
            },
            //检验登陆信息
            checkAllInfo() {
                let that = this;
				let allInfo = {
					username: this.username,
					password: this.password
                }
                axios.get('/api/users/signin',allInfo)
					.then(function( res){
						if(res.data.data.success){
							Toast({
								message:'登录成功！',
								duration: 2000
							});
							//将用户信息存到vuex
							that.$store.commit('getUserInfo',res.data.data);
						}else{
							Toast({
								message:'用户不存在，请先注册！',
								//duration: 2000
							});
						}
					})
					.catch(function(err){
					    Toast({
                            message:'网络错误！',
                            duration: 2000
                        });
					})
            },
            //控制密码显示隐藏
            pswControl() {
                if(this.isShow){
                    this.pswshow = "password";
                    this.isShow = !this.isShow;
                }else{
                    this.pswshow = "text";
                    this.isShow = !this.isShow;
                }
            }

		}
    }
</script>

<style lang="scss" scoped>
@import '../styles/yo/usage/core/reset.scss';    
.login-page{
    width: 100%;
    height: 100%;
    @include flexbox();
    @include flex-direction(column);
    .login-header{
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
                color:#666666;
            }
        }
    }
    .login-content{   
        @include flex();
        @include border(1px 0 0 0 );
        padding: 0 .23rem;
        width: 100%;
        .login-box{
            width: 100%;
            >p{
                margin-top: .2rem;
                height: .36rem;
                width: 100%;
                @include border(1px);
                @include border-radius(.05rem);
                input{
                    width: 100%;
                    height: 100%;
                    border:0;
                    padding: 0 .15rem;
                    font-size: .12rem;
                }
            }
            >p:nth-child(2) {
                @include flexbox();
                background: #fff;
                input{
                    width: 70%;
                }
                span{
                    @include flex();
                    text-align: center;
                    line-height: .36rem;
                    font-size: .2rem;
                    color:#666;
                }
            }
            .input-code{
                margin-top: .2rem;
                height: .36rem;
                width: 100%;
                @include flexbox();
                p{
                    height: 100%;
                    width: 60%;
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
                span{
                    @include flex();
                    @include align-items();
                    height: 100%;
                    img{
                        width: 80%;
                        height: 100%;
                        background: #f00;
                    }
                }
            }
            .btn{
                margin-top: .2rem;
                height: .4rem;
                width: 100%;
                @include flexbox();
                span{
                     width: 50%;
                     height: 100%;
                     @include flexbox();
                    button{
                        width: 90%;
                        height: 90%;
                        color:#fff;
                        background-color: #00b8d2;
                    }
                 }
                 span:last-child{
                    @include justify-content( flex-end );
                    button{
                        background-color: #ff8400;
                    }
                 }
              
            }
            .go-link{
                height: .2rem;
                width: 100%;
                @include flexbox();
                color:#666;
                span{
                    width: 50%;
                    height: 100%;
                    font-size: .12rem;
                    line-height: .2rem;
                }
                span:last-child{
                    text-align: right;
                }
            }
        }
        .relation{
            width: 100%;
            p{
                width: 100%;
                height: .5rem;
                @include flexbox();
                span{
                    width: 100%;
                    height: 100%;
                    padding-top:.25rem; 
                    color: #979797;
                    font-size: .14rem;
                    text-align: center;
                    padding-bottom:.1rem;
                    @include border(0 0 1px 0);
                }
            }
            ul{
                @include flexbox();
                @include justify-content();
                margin-top:.25rem;
                height: .3rem;
                width: 100%;
                li{
                    height: 100%;
                    width: .3rem;
                    margin: 0 .1rem;
                    img{
                    	width: 100%;
                    	height: 100%;
                    }
                }
            }
        }
    }
}
</style>

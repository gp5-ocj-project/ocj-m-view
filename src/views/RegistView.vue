<template>
    <div class="regist-page">
        <div class="regist-header">
            <div class="return">
                <i>1</i>
                <span>返回</span>
            </div>
            <h3>注册</h3>
            <div class="area">
                <span></span>
            </div>	
	    </div>
         <div class="regist-content">
              <p><input type="text" placeholder="请输入手机号"/></p>
              <div class="input-code">
                <p><input type="text" placeholder="请输入验证码" /></p>
                <span><img src="" alt=""/></span>
              </div>
              <div class="regist-agree"><input type="radio"/><span>同意</span>《东方购物网络使用条款》</div>
              <div class="regist-btn">
                  <mt-button type="primary">下一步</mt-button>
              </div>
         </div>
    </div>
</template>

<script>
    import { Button } from 'mint-ui'
    export default {
        components: {
            [Button.name]:Button
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
        }
        h3{
           font-weight: bold;
           font-size: 18px;
           @include flex();
           text-align: center;
           line-height: .44rem;
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

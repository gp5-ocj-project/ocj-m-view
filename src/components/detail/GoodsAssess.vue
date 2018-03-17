<template>
    <div class="goods-assess">
        <div>
            <span>69条评价</span>
            <span>综合评价</span>
            <p>AAAAAA</p>
        </div>
        <ul>
            <li>
                <p>
                    <span>陈AA</span>
                    <span>BBBBB</span>
                </p>
                <p>一直在用百岁山矿泉水，质量保证，看到有活动就买</p>
                <p>2018-03-14</p>              
            </li>
            <li>
                <p>
                    <span>陈AA</span>
                    <span>BBBBB</span>
                </p>
                <p>一直在用百岁山矿泉水，质量保证，看到有活动就买</p>
                <p>2018-03-14</p>              
            </li>
            <li>
                <p>
                    <span>陈AA</span>
                    <span>BBBBB</span>
                </p>
                <p>一直在用百岁山矿泉水，质量保证，看到有活动就买</p>
                <p>2018-03-14</p>              
            </li>
            <li>
                <p>
                    <span>陈AA</span>
                    <span>BBBBB</span>
                </p>
                <p>一直在用百岁山矿泉水，质量保证，看到有活动就买</p>
                <p>2018-03-14</p>              
            </li>
        </ul>
    </div>
  
</template>
<style lang="scss" scoped>
@import '../../styles/yo/usage/core/reset.scss'; 
.goods-assess{
    width: 100%;
    height: 100%;
    background: #fff;
    div{
        height: .38rem;
        width: 100%;
        line-height: .38rem;
        color: #707070;
        font-size: .12rem;
        background-color: #ebebeb;
        @include flexbox();
        span{
            width: .6rem;
            height: 100%;
        }
        span:first-child{
            width: .7rem;
            padding-left: .1rem
        }
        p{
            @include flex();  
        }
    }
    ul{
        width: 100%;
        li{
            width: 100%;
            padding: .11rem .11rem .06rem;
            @include border(0 0 1px 0,$border-style:dashed);
            p{
                color: #707070;
                font-size: .14rem;
                height: .2rem;
            }
            p:nth-child(2){
                height:auto;
                color: #535353;
                font-size: .12rem;
            }
            p:last-child{
                font-size: .1rem;
                color: #a6a5a5;
            }

        }
       
    }
}
</style>

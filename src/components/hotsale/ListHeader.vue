<template>
	
<div>
    <div id="header">
        <div class="oheader">
            <h1>热销榜</h1>
            <div class="h_back_btn">
                <router-link to="/" tag="a">返回</router-link>
            </div>
            <!-- <div class="h_r_btn"><a href="/m/user/register/register.html"></a></div> -->
        </div>
    </div>
</div>

</template>

<script>
export default {
  methods:{
      
  }
}
</script>


<style lang="scss">
	@import '../../styles/yo/usage/core/reset.scss';
    #header {
        display: block;
        z-index: 20;
        height: .44rem;
    }
	#header .oheader {
        width: 100%;
        background: rgba(247,247,247,.9);
        height: .44rem;
        line-height: .44rem;
        box-shadow: 0 1px 0 rgba(0,0,0,.2);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1001;
    }
    #header .oheader h1 {
        height: .44rem;
        line-height: .44rem;
        text-align: center;
        color: #5b5b5d;
        font-weight: bold;
        text-shadow: 0 1px 0 #fff;
        font-size: .18rem;
    }
    #header .oheader .h_back_btn {
        position: absolute;
        left: .1rem;
        top: .07rem;
    }
    #header .oheader .h_back_btn a {
        display: block;
        background: url("http://cdnimg.ocj.com.cn/common/html5/images/common/back_btn.png") no-repeat;
        background-size: .5rem .3rem;
        width: .5rem;
        height: .3rem;
        line-height: .3rem;
        color: #333;
        font-size: .14rem;
        text-indent: .2rem;
        white-space: nowrap;
    }
</style>
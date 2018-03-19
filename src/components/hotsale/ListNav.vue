<template>
	
<div>
    <nav class="holdcommonTix" style="position: fixed; z-index: 9198; width: 375px;">
        <ul>
            <li class="list05 " >
                <a @click="renderss" :class="all">
                <p class="p1"></p>
                <p class="p2">全部分类</p>
                </a>
                <div class="jiaobiao"></div>
            <span></span>
                <div class="jiaobiao"></div>
            </li>
            <li id="nav_ul_list_1" name="2204" class="list02">
                <router-link to="/list?temp_corner_num=2204" tag="a" active-class="on" exact>
                <p class="p1"></p><p class="p2">TV商品</p>
                </router-link>
            </li>
            <li id="nav_ul_list_2" name="2205" class="list03 ">
                <router-link to="/list?temp_corner_num=2205" tag="a" active-class="on" exact>
                <p class="p1"></p><p class="p2">手机专享</p></router-link>
            </li>
            <li id="nav_ul_list_3" class="list04">
                <router-link to="/list?temp_corner_num=2206" tag="a" active-class="on" exact>
                <p class="p1"></p><p class="p2">团购</p></router-link>
            </li>
                <li id="nav_ul_list_5" name="10341" class="list07  ">
                <router-link to="/list?temp_corner_num=2207" tag="a" active-class="on" exact>
                <p class="p1"></p>

                <p class="p2">全球购</p>
            </router-link></li>
            <div class="list_category" :style="done">
                <ul>
                    <li><a href="/catalog/rank?temp_corner_num=2206&amp;wLgroup=1">厨房用品、厨房电器</a></li>
                    <li><a href="/catalog/rank?temp_corner_num=2206&amp;wLgroup=2">家居、家饰</a></li>
                    <li><a href="/catalog/rank?temp_corner_num=2206&amp;wLgroup=3">食品饮料、酒水、生鲜</a></li>
                    <li><a href="/catalog/rank?temp_corner_num=2206&amp;wLgroup=4">手机、数码、电脑</a></li>
                    <li><a href="/catalog/rank?temp_corner_num=2206&amp;wLgroup=5">家用电器</a></li>
                    <li><a href="/catalog/rank?temp_corner_num=2206&amp;wLgroup=6">化妆品、洗护沐浴</a></li>
                    <li><a href="/catalog/rank?temp_corner_num=2206&amp;wLgroup=7">服装、鞋靴、箱包、配饰</a></li>
                    <li><a href="/catalog/rank?temp_corner_num=2206&amp;wLgroup=8">母婴、玩具、宠物</a></li>
                    <li><a href="/catalog/rank?temp_corner_num=2206&amp;wLgroup=9">珠宝、收藏、手表</a></li>
                    <li><a href="/catalog/rank?temp_corner_num=2206&amp;wLgroup=10">保健品、运动户外、器械</a></li>
                    <li><a href="/catalog/rank?temp_corner_num=2206&amp;wLgroup=11">汽车、旅游、保险、票务</a></li>
                        <li><a href="/catalog/rank?temp_corner_num=2203">全部商品</a></li>
                </ul>
            </div>
        </ul>
        
    </nav>
    <div style="height: .6rem;"></div>
</div>

</template>

<script>
export default {
      data:()=>{
          return {
              flag:false,
              all:'',
              done:''
          }
      },
  methods:{
    
      renderss(){
          this.flag = !this.flag
          if(this.flag){
              this.all = 'on'
              this.done = 'display:block'
          }else{
              this.all = ''
               this.done = ''
          }
      }
  }
}
</script>


<style lang="scss">
@import '../../styles/yo/usage/core/reset.scss';
.on{
    background: #5818a4;
        color: #ffd250;
}
nav ul {
    display: -webkit-box;
    background-color: #7223d0;
    position: relative;
}
nav ul li {
    @include flexbox();
    width: 20%;
    // -webkit-box-flex: 1;
    text-align: center;
    position: relative;
}

 nav ul li a {
     height: .6rem;
    text-align: center;
    color: #fff;
    font-size: .12rem;
    display: block;
    width: 100%;
}
nav ul li .p1 {
    width: .24rem;
    height: .24rem;
    margin: 0 auto;
    margin-top: .08rem;
    display: inline-block;
}
nav ul li.list05 .p1 {
    background: url("http://m.ocj.com.cn/common/html5/images/toplist/iconf05.png") no-repeat;
    background-size: .24rem;
}
nav ul li.list03 .p1 {
    background: url("http://m.ocj.com.cn/common/html5/images/toplist/iconf03.png") no-repeat;
    background-size: .24rem;
}
nav ul li.list02 .p1 {
    background: url("http://m.ocj.com.cn/common/html5/images/toplist/iconf02.png") no-repeat;
    background-size: .24rem;
}
nav ul li.list04 .p1 {
    background: url("http://m.ocj.com.cn/common/html5/images/toplist/iconf04.png") no-repeat;
    background-size: .24rem;
}
 nav ul li.list07 .p1 {
    background: url("http://m.ocj.com.cn/common/html5/images/toplist/icon08.png") no-repeat;
    background-size: .24rem;
}
 nav ul li .p2 {
    font-size: .14rem;
    padding-bottom: .06rem;
    text-align: center;
    width: 100%;
}
nav .list_category {
    position: absolute;
    padding: 18px 0;
    background-color: #ffffff;
    z-index: 1001;
    top: 100%;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #7223d0;
  display: none; 
}
nav .list_category ul {
    background: #fff;
    display: block;
    height: auto;
    padding-bottom: 5px;
    position: relative;
}

nav .list_category li {
    height: 35px;
    width: 50%;
    height: 28px;
    line-height: 28px;
    background: #fff;
    display: inline-block;
    float: left;
}

 nav ul li {
    -webkit-box-flex: 1;
    text-align: center;
    position: relative;
}
nav .list_category li a {
    font-size: 16px;
    line-height: 35px;
    height: 35px;
        color: #7223d0;
}
.jiaobiao {
    width: .1rem;
    height: .1rem;
    position: absolute;
    bottom: 0;
    right: 0;
    background-image: url("http://m.ocj.com.cn/common/images/toplist/jiaobiao.png");
    background-size: 100% auto;
}
</style>

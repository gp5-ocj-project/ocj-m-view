<template>
	
<div >
        <list-nav></list-nav>
<div class="toplist_list">
      <div class="toplist_list_bg" style="display: none;"></div>
      <!-- rank 1-3 -->
      
        <div class="list bor_b_1 p_r">
          <div class="clear pad10">
            <div class="fl mr10 rankpic"><a href="/detail/15217885"><img alt="" src="http://cdnimg.ocj.com.cn/item_images/item/15/21/7885/15217885M.jpg" width="145">
            <b><b>1</b></b></a></div>
            <div><p class="fo14 c_dark_gray"><a href="/detail/15217885">CARTELO 卡帝乐鳄鱼男士风衣</a></p>
            <p class="pt5">
              
                <span class="icon_big_quan mr5" style="background:red;font-size:13px">TV</span>
              
                <span class="icon_big_ji mr5">积</span>
              
            </p>
            <br>
            <span class="fo20 c_red">
              
                  ￥393
            </span>
            
              <a href="/popup/mcart/15217885"><span class="icon_addcart ml10 mt5"></span></a>
            
            <a href="javascript:;" onclick="addMyFavo('15217885');"><span class="icon_collect ml10 mt5"></span></a></div>
          </div>
        </div>
  
  
</div></div>

</template>

<script>
import ListNav from './ListNav';
export default {
    
  components: {
		ListNav
    }
}
</script>
<style lang="scss"> 
@import '../../styles/yo/usage/core/reset.scss';
.toplist_list {
    position: relative;
}
.toplist_list_bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
    z-index: 1000;
    /* display: none; */
}
.bor_b_1 {
    width: 100%;
    float: left;
}

.pad10 {
    padding: 10px;
    position: relative;
}
.fl.rankpic {
    float: left;
    display: inline;
    width: 48%;
    margin-right: 2%;
}
.toplist_list .rankpic a {
    position: relative;
    display: block;
}
.toplist_list .rankpic a b {
    position: absolute;
    left: -1px;
    top: -1px;
    background-image: url("http://m.ocj.com.cn/common/html5/images/toplist/rankbg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 30px;
    height: 45px;
    color: #ff6425;
    font-family: "Arial", "Microsoft Yahei";
    padding-right: 15px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    line-height: 30px;
}
p.c_dark_gray {
    line-height: 22px;
}

.toplist_list .list p.c_dark_gray {
    word-break: break-all;
    word-wrap: break-word;
    line-height: 18px;
    overflow: hidden;
}
.c_dark_gray {
    color: #515052;
}
.fo14 {
    font-size: 14px;
}
.icon_big_ji {
    background: #ffac54;
}

.icon_big_quan, .icon_big_gift, .icon_big_ji {
    float: left;
    width: 17px;
    height: 17px;
    color: #fff;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
}
.mr5 {
    margin-right: 5px;
}
.c_red {
    color: #d91404;
}

.fo20 {
    font-size: 16px;
}

.icon_collect, .icon_addcart {
    display: block;
    float: right;
    width: 22px;
    height: 17px;
    background: url("http://m.ocj.com.cn/common/html5/images/user/collect_cart.png") no-repeat;
    background-size: 53px 17px;
}
.icon_addcart {
    background-position: -32px 0;
}
.mt5 {
    margin-top: 5px;
}
.ml10 {
    margin-left: 10px;
}
.toplist_list .bor_b_1 img {
    width: 100%;
    height: auto;
}
.clear:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.bor_b_1 {
    border-bottom: 1px solid #dcdcdc;
}
.toplist_list .list p.c_dark_gray {
    line-height: 22px;
}

.toplist_list .list p.c_dark_gray {
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
}
.toplist_list .list p.c_dark_gray a {
    font-size: 16px;
    color: #303030;
}

</style>

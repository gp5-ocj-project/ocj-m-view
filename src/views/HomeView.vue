<template lang="html">
  <div class="container">
    	<header-component></header-component>
    	<banner></banner>
    	<adv></adv>
    	<iconbox></iconbox>
		<live></live>
		<preference-shop></preference-shop>
		<more-active></more-active>
  </div>
</template>

<script>

//头部
import HeaderComponent from '../components/public/Header';
//轮播图下面的广告
import Adv from '../components/home/Adv';
//首页菜单
import Iconbox from '../components/public/Iconbox';
//轮播图
import Banner from '../components/public/Banner';
//直播部分
import Live from '../components/home/Live';
//优选商城
import PreferenceShop from '../components/home/PreferenceShop';
import MoreActive from '../components/home/MoreActive';

export default {

	components: {
		HeaderComponent,
		Adv,
		Iconbox,
		Banner,
		Live,
		PreferenceShop,
		MoreActive
	}

}
</script>

<style lang="scss">
	.container{
		overflow-y: scroll;
	}
</style>

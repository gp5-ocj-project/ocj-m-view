<template lang="html">
  <div class="container">
       <header-component></header-component>
       
       <Banner></Banner>
       <div class="banner"></div>
       <adv></adv>
       <iconbox></iconbox>
		
  </div>
</template>

<script>

import HeaderComponent from '../components/public/Header';
import Adv from '../components/home/adv';
import Iconbox from '../components/public/Iconbox';
import Banner from '../components/public/Banner';

export default {

	components: {
		HeaderComponent,
		Adv,
		Iconbox,
		Banner
	}

}
</script>

<style lang="scss">



</style>

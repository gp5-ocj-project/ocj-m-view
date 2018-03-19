<template>
	
	<div class="list-wraper">
	    <list-header></list-header>

	    <list-container></list-container>
    </div>

</template>

<script>
import ListHeader from './ListHeader';
import ListNav from './ListNav';
import ListContainer from './ListContainer';

export default {

	components: {
		ListHeader,
		ListNav,
		ListContainer
    }
}
</script>

<style lang="scss">
	@import '../../styles/yo/usage/core/reset.scss';
	

</style>



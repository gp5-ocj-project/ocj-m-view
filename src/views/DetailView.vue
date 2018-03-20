<template>
	<div class="detail-layout">
		<div class="layout-header">
			<detail-header></detail-header>
		</div>
		<div class="layout-body">
			<router-view></router-view>
		</div>
		<div class="layout-footer">
			<detail-footer></detail-footer>
		</div>	
	</div>
</template>

<script>
	import DetailHeader from "../components/detail/DetailHeader";
    import DetailFooter from "../components/detail/DetailFooter";

	export default {
        data:() => {
            return {

            }
        },
		components: {
			DetailHeader,
			DetailFooter,
		}
	}
</script>

<style lang="scss" scoped>
@import '../styles/yo/usage/core/reset.scss'; 
.detail-layout {
    height: 100%;
    width: 100%;
    @include flexbox();
    @include flex-direction(column);
    .layout-header {
        height: .44rem;
        width: 100%;
        background: rgba(247,247,247,.9)
    }
    .layout-body {
        @include flex();
        width: 100%;   
        overflow-y: scroll;    
    }
    .layout-footer {
        width:100%;
        height: .44rem;
    }
}
</style>

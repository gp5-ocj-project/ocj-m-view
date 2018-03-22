<template lang="html">
	<router-view></router-view>
 </template>

<script>
	import axios from 'axios';
	import WebStorageCache from 'web-storage-cache';
    let wsCache = new WebStorageCache();
	export default {
		data:() => {
			return {

			}
		},
		mounted() {
				//token认证
				let that = this;
				axios({
					method: 'GET',
					url: '/api/users/islogin',
					headers: {
						'X-Access-Token': wsCache.get('token')
					},
				}).then(function(res) {
				//console.log(res);
				that.$store.commit('checkUserInfo',res.data.data.islogin)
		    });
		}
  }
</script>
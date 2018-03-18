<template lang="html">
	<header>
		<div class="topfix">
			<div class="topfix-content">
				<div class="classify">
					<img src="http://m.ocj.com.cn/common/mobile_phone/cssimage/indeximg/barimage0.png" alt="">
				</div>
				<div class="logo">
					<img src="http://m.ocj.com.cn/common/mobile_phone/cssimage/indeximg/logoicon.png" alt="">
				</div>
				<div class="search">
					<span class="field">搜索货号/关键词</span>
					<i></i>
				</div>
			</div>
		</div>
		<nav>
			<ul class="nav">
				<li v-for='(v, i) in nav'>
					<router-link  tag='a' active-class="active" :to="v.navLink" >{{v.name}}</router-link>
				</li>
			</ul>
		</nav>
	</header>

</template>

<script>
	export default {
		data:function() {
			return {
				nav: [
					{
						name:'首页', 
						navLink: 'home'
					},
					{
						name:'TV购物', 
						navLink: 'tvshop'
					},
					{
						name:'团购', 
						navLink: 'teamshop'
					},
					{
						name:'全球购', 
						navLink: 'globalshop'
					},
					{
						name:'商城', 
						navLink: 'market'
					},
					{
						name:'企业官网',
						navLink: 'business'
					}
				]
			}
		}

	} 
</script>

<style lang="scss">
	@import '../../styles/yo/usage/core/reset.scss';
	header{
		height: 0.95rem;
	    width: 100%;
	    
	    background-color: #ffffff;
	    z-index: 2000;
	    @include clearfix();
		.active{
			border-bottom: 3px solid #f12e24;
			color: #f12e24;
		}
	    .topfix{
		    width: 100%;
		    height: auto;
		    z-index: 999;
		    background-color: #f12e24;
		    padding: 9px;
		    @include clearfix();

		    .topfix-content{
		    	background-color: #f12e24;
			    position: relative;
			    width: 100%;
				@include clearfix();

			   	.classify{
				    width: .24rem;
				    height: auto;
				    float: left;
				    margin: 1px 0 0 4px;
				    height: 35px;
				    background-size: 100% auto;
				    background-image: none;
				    img{
			    	    width: 100%;
					    height: auto;
					    border: none;
				    }
			   	}
			   	.logo{
		    	    width: .35rem;
				    height: 35px;
				    float: left;
				    margin: 0 .09rem 0 .13rem;

				    img{
				    	width: 100%;
			    	    height: auto;
	   					border: none;
				    }
			    }
			    .search{
			    	height: .32rem;
				    float: right;
				    background-color: #d42e2c;
				    @include border(1px 1px 1px 1px, #d42e2c);
				    padding: 2px .1rem 2px 10px;
				    width: calc(100% - .9rem);
				    margin-top: 2px;

				    .field{
				    	font-size:.14rem;
			    	    color: white;
	    				line-height: .30rem;
				    }
				    i{
				    	display: inline-block;
				    	height: 22px;
				    	width: 22px;
				    	background: url("http://m.ocj.com.cn/common/mobile_phone/cssimage/indeximg/searchbutton0.png") no-repeat center;
				    	float: right;
				    	background-size: 100% 100%;
				    	margin-top: .05rem;	
				    }
			    }
		    }
	    }
	    nav{
	    	width: 95%;
	    	margin: 0 auto;
			.nav{
				@include flexbox();
				@include justify-content(space-between);
				@include align-items(center);
				height: 100%;
			}

	    	li{
	    		height: 100%;
	    		padding: .12rem 0;
				text-align: center;
				flex: 1;
    		    
    		    a{
    		    	font-size: .14rem;
    		    	color: #777;
    		    	padding-bottom: .03rem;
    		    }
	    	}
	    	li:nth-child(2){
	    		width: .6rem;
	    		flex: none;
	    	}
	    	li:last-child{
	    		color: red;
	    		width: .7rem;
	    		flex: none;
	    	}

	    }
	}
    

</style>




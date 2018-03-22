<template>
   <div class="cart-Layout">
       <header>
           <cart-header></cart-header>
       </header>
       <main>
           <cart-body></cart-body>
       </main>
       <footer>
           <cart-footer></cart-footer>
       </footer>
   </div>
</template>

<script>
    import CartHeader from "../components/cart/CartHeader";
    import CartFooter from "../components/cart/CartFooter";
    import CartBody from "../components/cart/CartBody";
    
    

	export default {
        data:() => {
            return {

            }
        },
		components: {
            CartHeader,
            CartFooter,
            CartBody
		}
	}
</script>

<style lang="scss" scoped>
@import '../styles/yo/usage/core/reset.scss'; 
.cart-Layout{
    width: 100%;
    height: 100%;
    @include flexbox();
    @include flex-direction(column);
    header{
        width: 100%;
        height: .44rem;
        @include border(0 0 1px 0);
    }
    main{
        @include flex();
         width: 100%;
        overflow-y: scroll;
    }
    footer{
        width: 100%;
        height: .6rem;
        @include border(1px 0 0 0);
    }
}
</style>
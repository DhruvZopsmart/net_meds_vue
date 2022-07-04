<template  >
  <Header :size="cart"/>
  <router-view class="contianer"  @add-to-cart="addtocart" :cart="cart" @remove-item="remove" :price="price" />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Header, Footer },

  data() {
    return {
      cart: [],
      price:0
    };
  },
  emits:['add-to-cart'],
  methods: {
    addtocart(name) {
    // alert(name.price);
    this.price += name.price;
    this.cart.push({...name , uid : new Date().toISOString()});
    // console.log(cart);
    },
    remove(itemUid){
      // alert(itemUid); 
       this.cart =  this.cart.filter((item)=>{
         if(item.uid !== itemUid)
          return item ;
          else this.price -= item.price;
       })
      //  alert(cart);s 
    }
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

</style>

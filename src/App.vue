<template>
  <Header :size="cart"/>
  <router-view @add-to-cart="addtocart" :cart="cart" @remove-item="remove" :price="price" />
  <Footer  style="padding-bottom:0px"/>
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
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

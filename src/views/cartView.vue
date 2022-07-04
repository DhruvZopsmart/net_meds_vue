<template>
<div class="container">
  <div class="row">
    <div class="col">
  <div v-if="cart.length" >
  <div  v-for="item in cart"  :key="item.id">
    <Item2 :item="item" @remove-item="remove" />
  </div>
  <h1 class="ml-3">Price:{{price}} </h1>
  <button class="btn btn-primary"> place your order</button> 
  </div>
  <div v-else>
       <h1 className=" container my-4 text-center">
          Please! Add items into Cart :)
        </h1>
        <h1 className=" text-center">
          <i className="fas fa-cart-arrow-down fa-5x"> </i>
        </h1>
  </div>
  </div>
  </div>
  </div>
</template>

<script>
import Item2 from "../components/item2.vue";
export default {
  props: {
    cart: Object  ,
    price:Number
  },
  data() {
    return {
      items: [],
    };
  },

  methods: {
    shouldthtiswork() {
      alert(1);
    },
  },
  components: { Item2 },
  emits: ["remove-item"],
  methods:{
    remove(itemUid){
      this.$emit('remove-item', itemUid);
    }
  }
};
</script>

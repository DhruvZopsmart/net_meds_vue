<template>
  <Items @add-to-cart="callit"/>
</template>

<script>
import Items from '../components/Items.vue';
export default {
  components: { Items },
  methods:{
    callit(name){
       this.$emit("add-to-cart",name)
    }
  },
  emits:['add-to-cart']

}
</script>
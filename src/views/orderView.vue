<template>
  <Items @add-to-cart="callit"/>
</template>

<script>
import Items from '../components/Items.vue';
export default {
  components: { Items },
  emits:['add-to-cart'],
  methods:{
    callit(name){
      alert(name)
    }
  }
}
</script>
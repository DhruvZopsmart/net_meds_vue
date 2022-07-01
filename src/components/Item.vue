<template>
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" :src="arg.url" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{arg.name}}</h5>
    <p class="card-text">{{arg.para}}</p>
     <p >$ {{arg.price}}</p>
    <button href="#"  @click="$emit('add-to-cart',arg.name)" class="btn btn-primary">add to cart</button>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      image : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAC6CAMAAAAu0KfDAAAAOVBMVEX///8AAADs7Oxra2uXl5f8/Pw1NTXU1NTw8PBnZ2fExMQgICBNTU3c3Nx1dXUxMTFBQUGxsbFhYWHBLujbAAAA6UlEQVR4nO3cbY7CIBiFUS32Qx2Kdv+LnQ1UIEbnbTLnLODm+UsgnE4AAAAAAAAAsNw6LNGVu+bHvekxR1fumqdz0yT9w6RHkB5BegTpEaRHkB5BegTpEaRHkB5BeoS5tNPLMdPz9tO05ejKXWPuMEZXAgBA1Vj3RxPvGNYyvVbWjvv/pTExfCs9VQ9v1570a3UiSZcuXbp06dKlS5cuXbp06dKlS2+np570xkRQ+paHprwdMr2ktSnVn0BEpX+AdOnSpUuXLl26dOnSpUuXLl26dOlR6cvz8mXPY37aAwAAAAAAAADw3/wCNHspK9U90TMAAAAASUVORK5CYII=",
    };
  },
  emits:['add-to-cart'],
  props: {
    arg: Object,
  },
};
</script>


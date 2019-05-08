<template>

<div v-if="title == 'ELEMENT'">
  <div>
    
    <table>
      <tr> <img :src="image" :alt="name" class="card-img-top"></tr>
      <tr><h6>{{title}}</h6></tr>
      <tr><h4 >{{ name }}</h4></tr>
      <tr><span class="cross">{{price2 | dollars}}</span></tr>
      <tr><h5>{{ price | dollars }}</h5></tr>
      <tr><button class="btn btn-primary" @click="addToCart(invId)">ADD TO CART</button></tr>
    </table>
  </div>
</div>
</template>

<script>
import { dollars } from '../components/filter';
    export default {
    name: 'item3',
    props: ['invId', 'title', 'name', 'image', 'price', 'price2'],
    methods: {
    addToCart(invId) {
      this.$store.dispatch('addToCart', invId);
    },
    },
   filters: {
    dollars, 
  },
    };
</script>

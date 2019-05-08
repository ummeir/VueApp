<template>

  <div id="app">
    <div class="stick fixed-top">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark"><!--change this to light or dark-->
      <div class="container">
      <router-link class="navbar-brand" to="/shop" style="font-size:20px;">BACK PACK CO.</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/shop">SHOP</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/checkout">CHECKOUT</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="#" class="nav-link"  data-toggle="modal" data-target="#shoppingCart">CART ({{ numInCart }})</router-link>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    </div>
    
    <router-view class="appbody"/>
    <div id="shoppingCart" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">CART</h5>
        <button class="close" data-dismiss="modal">
          &times;
        </button>
      </div>
      <div class="modal-body">
       <table class="table">
        <div v-if="total == 0">
                   <p>CART IS CURRENTLY EMPTY</p>
                </div>
                <tbody>
            <tr v-bind:key="item.id" v-for="(item, index) in cart">
                <td>{{item.title}}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.price | dollars }}</td>
                <td>
                    <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">&times;</button>
                </td>
            </tr>
            <tr>
                <th></th>
                <th>TOTAL</th>
                <th>{{ total | dollars }}</th>
                <th></th>
            </tr>
        </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-dismiss="modal">Keep shopping</button>
        <router-link to="/Checkout"><button class="btn btn-primary" data-dismiss="modal">Check out</button></router-link>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>

import { dollars } from './components/filter';

export default {
   methods: {
    removeFromCart(index) {
      this.$store.dispatch('removeFromCart', index);
    },
  },
  computed: {
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
      },
    cart() {
      return this.$store.getters.inCart.map((cartItem) => {
        return this.$store.getters.forSale.find((forSaleItem) => {
          return cartItem === forSaleItem.invId;
        });
      });
    },
    inCart() { return this.$store.getters.inCart; },
    numInCart() { return this.inCart.length; },
  },
  filters: {
    dollars,
  },
};
</script>


<style>
.appbody{
  padding-top: 20px;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app .navbar{
  border-radius: 0;
}

</style>

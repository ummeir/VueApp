<template>
  <div class="checkout">
    <div class="head-title">
      <div class="container">
      <h1>CHECKOUT</h1>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1>BILLING DETAILS</h1>
            <!--Billing detaisl form starts here-->
            <form>
              <div class="form-group">
                <label>First Name</label>
                <input type="text" placeholder="First Name" class="form-control">
              </div>

              <div class="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" class="form-control">
              </div>

              <div class="form-group">
                <label>Country</label>
                <input type="text" placeholder="Country" class="form-control">
              </div>

              <div class="form-group">
                <label>Street Address</label>
                <input type="text" placeholder="Street Address" class="form-control">
              </div>

              <div class="form-group">
                <label>Postal/Zip</label>
                <input type="text" placeholder="Postal/Zip" class="form-control">
              </div>

              <div class="form-group">
                <label>Phone</label>
                <input type="text" placeholder="Phone" class="form-control">
              </div>

              <div class="form-group">
                <label>Email</label>
                <input type="email" placeholder="Add Email" class="form-control">
              </div>

              <div class="form-group">
                <label>Message</label>
                <textarea placeholder="Add message" class="form-control"></textarea>
              </div>
           </form>
        </div>
    <!--Order starts here-->
        <div class="col-md-6">
          <h1>YOUR ORDER</h1>
          <!--Order Details here-->
          <div v-if="total == 0">
                   <p style="font-size: 20px; background: lightblue;">CART IS CURRENTLY EMPTY</p>
                </div>
                <div v-else>
            <table class="table table-striped table-bordered table-hover ">
                <tr >
                  <th>Brand</th>
                  <th>Product</th>
                  <th>Price</th>
                </tr>
                
                <tr v-bind:key="item.id" v-for="(item) in cart">
                  <td>{{item.title}}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.price | dollars }}</td>
                </tr>
                <tr>
                  <th></th>
                  <th>Total</th>
                  <th>{{ total | dollars }}</th>
                </tr>
            </table>
                </div>
          <!--Credit Card info here-->
          <form>
            <div class="form-group">
              <label>Card Number*</label>
              <input type="text" placeholder="1234 1234 1234 1234" class="form-control">
            </div>

            <div class="form-group">
              <label>Expiry Date</label>
              <input type="text" placeholder="12/19" class="form-control">
            </div>

            <div class="form-group">
              <label>Card Code(cvc)*</label>
              <input type="text" placeholder="123" class="form-control">
            </div>

            <div class="checkbox">
              <label>
                <input type="checkbox"> I have read the terms and agreements of this site. 
              </label>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%;">Place Order</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { dollars } from '../components/filter';

export default {
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
.checkout .head-title{
  background: lightgray;
  padding: 10px;
  text-align: left;
  padding-top: 40px;
}
</style>
            
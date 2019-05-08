<template>
<div class="shop">
  
      <div class="head-title">
        <div class="container">
        <h1>SHOP</h1>
        </div>
      </div>

  <!--Tabs**************-->
<div class="container" style="padding-top: 30px;">
  <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#home">ALL</a></li>
    <li><a data-toggle="tab" href="#menu1">ADIDAS</a></li>
    <li><a data-toggle="tab" href="#menu2">ELEMENT</a></li>
    <li><a data-toggle="tab" href="#menu3">JANSPORT</a></li>
    <li><a data-toggle="tab" href="#menu4">TRACKER</a></li>
  </ul>

  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
      <h3>ALL</h3>
      <div class="row">
          <Item class="items"
            v-for="item in forSale"
            :key="item.invId"
            :invId="item.invId"
            :name="item.name"
            :image="item.image"
            :price="item.price"
            :price2="item.price2"
            :title="item.title" />
      </div>
    </div>
    <div id="menu1" class="tab-pane fade">
      <h3>ADIDAS</h3>
      <div class="row">
          <Item2 class="items"
            v-for="item in forSale"
            :key="item.invId"
            :invId="item.invId"
            :name="item.name"
            :image="item.image"
            :price="item.price"
            :price2="item.price2"
            :title="item.title" />
      </div>
    </div>

    <div id="menu2" class="tab-pane fade">
      <h3>ELEMENT</h3>
         <div class="row">
          <Item3 class="items"
            v-for="item in forSale"
            :key="item.invId"
            :invId="item.invId"
            :name="item.name"
            :image="item.image"
            :price="item.price"
            :price2="item.price2"
            :title="item.title" />
      </div>
    </div>

    <div id="menu3" class="tab-pane fade">
      <h3>JANSPORT</h3>
       <div class="row">
          <Item4 class="items"
            v-for="item in forSale"
            :key="item.invId"
            :invId="item.invId"
            :name="item.name"
            :image="item.image"
            :price="item.price"
            :price2="item.price2"
            :title="item.title" />
      </div>
    </div>

    <div id="menu4" class="tab-pane fade">
      <h3>TRACKER</h3>
       <div class="row">
          <Item5 class="items"
            v-for="item in forSale"
            :key="item.invId"
            :invId="item.invId"
            :name="item.name"
            :image="item.image"
            :price="item.price"
            :price2="item.price2"
            :title="item.title" />
      </div>
    </div>
  </div>
</div>
<!--Items********************
  <div id="app" class="container my-5">
    <div class="row mb-3">
      <div class="col-md-3">
        <ShoppingCart />
      </div>
    </div>
    <div class="row">
      <Item
        v-for="item in forSale"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :price="item.price"
        :price2="item.price2"
        :title="item.title" />
    </div>
  </div>*-->
</div>
</template>
<script>
import Item from '../modal/item.vue';
import Item2 from '../modal/item2.vue';
import Item3 from '../modal/item3.vue';
import Item4 from '../modal/item4.vue';
import Item5 from '../modal/item5.vue';
export default {
  name: 'app',
  computed: {
    forSale() { return this.$store.getters.forSale; },
  },
  components: {
    Item,
    Item2,
    Item3,
    Item4,
    Item5
  },
};
</script>
<style>

.shop{
  text-align: center;
}

.shop .head-title{
  background: lightgray;
  padding: 10px;
  text-align: left;
  padding-top: 40px;
}

.shop .items{
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  margin-top: 10px;
  border: 1px solid #ebebe0;
}

.shop .items h5{
  color: #00b300;
  font-size: 20px;
}

.shop .items .cross{
  text-decoration: line-through;
  color: 	 #b8b894;
  font-size: 18px;
}
</style>

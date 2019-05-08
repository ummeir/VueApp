import Vue from 'vue'
import Router from 'vue-router'
import Checkout from './views/Checkout.vue'
import Shop from './views/Shop.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    }
  ]
})

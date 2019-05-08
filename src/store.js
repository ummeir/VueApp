import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [
        { invId: 1, title: 'ADIDAS', name: 'FASHION', image:require('../src/assets/imgs/adidas2.jpg'), price: 4000, price2: 7000,},
        { invId: 2, title: 'ADIDAS', name: 'PINKY', image:require('../src/assets/imgs/adidas4.jpg'), price: 2000, price2: 4000,},
        { invId: 3, title: 'ADIDAS', name: 'GREE', image:require('../src/assets/imgs/adidas5.jpg'), price: 3000, price2: 5000,},
        { invId: 4, title: 'ADIDAS', name: 'STRIPES', image:require('../src/assets/imgs/adidas6.jpg'), price: 3500, price2: 6000,},
        { invId: 5, title: 'ELEMENT', name: 'BASIC', image:require('../src/assets/imgs/Element.jpg'), price: 3500, price2: 6000,},
        { invId: 6, title: 'ELEMENT', name: 'BOARDS', image:require('../src/assets/imgs/Element2.jpg'), price: 5000, price2: 8000,},
        { invId: 7, title: 'ELEMENT', name: 'SKATER', image:require('../src/assets/imgs/Element3.jpg'), price: 2500, price2: 4000,},
        { invId: 8, title: 'JANSPORT', name: 'SCHOOL BAG', image:require('../src/assets/imgs/Jansport.jpg'), price: 2500, price2: 4000,},
        { invId: 9, title: 'JANSPORT', name: 'BLACKY', image:require('../src/assets/imgs/Jansport2.jpg'), price: 2000, price2: 3000,},
        { invId: 10, title: 'JANSPORT', name: 'BLUEYE', image:require('../src/assets/imgs/Jansport3.jpg'), price: 3500, price2: 7000,},
        { invId: 11, title: 'JANSPORT', name: 'LIGHTS', image:require('../src/assets/imgs/Jansport4.jpg'), price: 2500, price2: 4000,},
        { invId: 12, title: 'JANSPORT', name: 'DRYER', image:require('../src/assets/imgs/Jansport5.jpg'), price: 6000, price2: 9000,},
        { invId: 13, title: 'JANSPORT', name: 'LEAVES', image:require('../src/assets/imgs/Jansport6.jpg'), price: 7000, price2: 9000,},
        { invId: 14, title: 'TRACKER', name: 'BLOCK', image:require('../src/assets/imgs/Tracker.jpg'), price: 3000, price2: 4000,},
        { invId: 15, title: 'TRACKER', name: 'LIGHT WEIGHT', image:require('../src/assets/imgs/Tracker2.jpg'), price: 5000, price2: 7000,},
        { invId: 16, title: 'TRACKER', name: 'CRUSIER', image:require('../src/assets/imgs/Tracker3.jpg'), price: 7000, price2: 9000,},
      ],
      inCart: [],
  },
  getters: {
    forSale: state => state.forSale,
  inCart: state => state.inCart,
  },
  mutations: {
    ADD_TO_CART(state, invId) { state.inCart.push(invId); },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1);
  },
},
    actions: {
      addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
      removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
    },
  
});
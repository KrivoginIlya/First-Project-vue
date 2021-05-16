// import axios from 'axios';

export default {
  state: {
    carts: [],
  },
  getters: {
    carts(state) {
      return state.carts;
    },
  },
  mutations: {
    // SET_CARTS_LIST(state, carts) {
    //   state.carts = carts;
    // },
    REMOVE_CART_ITEM(state, id) {
      const carts = state.carts.slice();
      const index = carts.findIndex((i) => i.id_product === id);
      if (index > -1) {
        const currentItem = carts[index];
        if (currentItem.quantity > 1) {
          const updatedItem = {
            ...currentItem,
            quantity: currentItem.quantity - 1,
          };
          carts.splice(index, 1, updatedItem);
          state.carts = carts;
        } else {
          state.carts = state.carts.filter((item) => item.id_product !== id);
        }
      }
    },
    // REPLACE ITEM WITH ID
    ADD_CART_ITEM(state, item) {
      const carts = state.carts.slice();
      const index = carts.findIndex((i) => i.id_product === item.id_product);
      if (index > -1) {
        const currentItem = carts[index];
        const updatedItem = {
          ...currentItem,
          quantity: currentItem.quantity + 1,
        };
        carts.splice(index, 1, updatedItem);
      } else {
        carts.push({ ...item, quantity: 1 });
      }
      state.carts = carts;
    },
  },
  actions: {
    // async getCartsList({ commit, state }) {
    //   if (state.carts.length) {
    //     return state.carts;
    //   }
    //   const { data: carts } = await axios.get(
    //     'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json',
    //   );
    //   commit('SET_CARTS_LIST', carts.contents);
    // },
    removeCartItem({ commit }, id) {
      commit('REMOVE_CART_ITEM', id);
    },
    addToCart({ commit }, id) {
      commit('ADD_CART_ITEM', id);
      // commit('SET_CARTS_LIST', console.log(good), state.goods.push(good));
    },
  },
};

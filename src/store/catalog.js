import axios from 'axios';

export default {
  state: {
    goods: [],
  },
  getters: {
    goods(state) {
      return state.goods;
    },
  },
  mutations: {
    SET_GOODS_LIST(state, goods) {
      state.goods = goods;
    },
  },
  actions: {
    async getGoodsList({ commit }) {
      const { data: goods } = await axios.get(
        'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
      );
      commit('SET_GOODS_LIST', goods);
    },
  },
};

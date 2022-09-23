import { createStore } from "vuex";

export default new createStore({
  state: {
    count: 0,
  },
  getters: {
    getCount: (state) => {
      return state.count;
    },
  },
  mutations: {
    increment: (state) => {
      state.count++;
    },
  },
});

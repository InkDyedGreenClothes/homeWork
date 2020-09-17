import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    countAdd(state) {
      state.count++;
    },
    countSubtract(state) {
      if (state.count == 0) alert('数值不能小于 0 哦!') 
      state.count = state.count > 0 ? state.count - 1 : 0;
    },
    countReset(state) {
      if (state.count == 0) alert('已经是 0 了，不需要重置哦!')
      state.count = 0;
    }
  },
  actions: {
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showTheNav: false
  },
  mutations: {
    showTheNav(state, show) {
      state.showTheNav = show;
    }
  },
  actions: {

  }
})

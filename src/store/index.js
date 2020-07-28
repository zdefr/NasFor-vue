import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account:'2735',
    nav_cho:'index'
  },
  mutations: {
    changeTitle:function (state,val) {
      state.nav_cho = val;
    }
  },
  actions: {
  },
  modules: {
  }
})

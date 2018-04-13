import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store  = () => new Vuex.Store({
  state: {
    openid: 111
  },
  getters: {
    openid: state => state.openid
  },
  mutations: {
    setOpenid(state, openid) {
      state.openid = openid
    }
  }
})

export default store

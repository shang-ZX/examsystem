import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    name: '',
    status: ''
  },
  mutations: {
    userstatus(state, obj){
      state.user = obj.user
      state.name = obj.name
      state.status = obj.status
    }
  },
  actions: {
  },
  modules: {
  }
})

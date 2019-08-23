import Vue from 'vue'
import Vuex from 'vuex'
import { getUser, setUser } from '@/utils/user.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getUser()
  },
  mutations: {
    changeUser (state, data) {
      state.user = data
      setUser(state.user)
    }
  },
  actions: {

  }
})

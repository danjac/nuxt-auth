import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  authenticated: false
}

const getters = {
  isAuth: state => state.authenticated
}

const mutations = {
  login (state) {
    console.log('authenticated!')
    Vue.set(state, 'authenticated', true)
  },

  logout (state) {
    Vue.set(state, 'authenticated', false)
  }
}

const actions = {
  nuxtServerInit({ commit }, { req }) {
    console.log('nuxtServerInit')
    if (req.session && req.session.authUser) {
      commit('login')
    } else {
      commit('logout')
    }
  },
  login ({ commit }) {
    commit('login')
  },

  logout ({ commit }) {
    commit('logout')
  }

}

export default () => new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

const state = {
  intro_animated: false,
}

const getters = {
  intro_animated: state => state.intro_animated,
}

const actions = {
  init({ commit }) {
    commit('init')
  },
}

const mutations = {
  init(state) {
    state.intro_animated = false
  },
  updateIntroAnimated(state, data) {
    state.intro_animated = data
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

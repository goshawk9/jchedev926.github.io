const state = {
  intro_animated: false,
  jumpto_about: false,
}

const getters = {
  intro_animated: state => state.intro_animated,
  jumpto_abuot: state => state.jumpto_about,
}

const actions = {
  init({ commit }) {
    commit('init')
  },
}

const mutations = {
  init(state) {
    state.intro_animated = false
    state.jumpto_about = false
  },
  updateIntroAnimated(state, data) {
    state.intro_animated = data
  },
  updateJumpToAbout(state, data) {
    state.jumpto_about = data
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

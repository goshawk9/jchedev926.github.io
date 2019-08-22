const state = {
  intro_animated: false,
  jumpto_about: false,
  jumpto_work: false,
}

const getters = {
  intro_animated: state => state.intro_animated,
  jumpto_abuot: state => state.jumpto_about,
  jumpto_work: state => state.jumpto_work,
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
    state.jumpto_work = false
  },
  updateIntroAnimated(state, data) {
    state.intro_animated = data
  },
  updateJumpToAbout(state, data) {
    state.jumpto_about = data
  },
  updateJumpToWork(state, data) {
    state.jumpto_work = data
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

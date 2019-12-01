export default {
  nuxtServerInit ({ commit }, { req }) {
    if (req.appConfig) {
      commit('config/setConfig', req.appConfig.public)
    }
  }
}

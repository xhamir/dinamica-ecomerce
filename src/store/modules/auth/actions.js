export default {
  updateLoginTokens({ commit }, tokens) {
    commit("setLoginTokens", tokens);
  },
};

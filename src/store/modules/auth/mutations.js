export default {
  setLoginTokens(state, tokens = null) {
    state.auth.tokens = tokens;
    if (tokens) {
      localStorage.setItem("session-tokens", JSON.stringify(tokens));
    } else {
      localStorage.removeItem("session-tokens");
    }
  },
};

export default {
  setInfo(state, payload) {
    state.name = payload.name;
    state.token = payload.token;
  },
  resetLoginInfo(state) {
    state.name = '';
    state.token = '';
  }
};

import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

const state = {
  name: localStorage.getItem('name') || '',
  email: '',
  HistoryList: [],
  favoriteList: [],
  token: localStorage.getItem('token') || '',
};
export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};

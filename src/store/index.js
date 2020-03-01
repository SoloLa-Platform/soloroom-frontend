import Vue from 'vue';
import Vuex from 'vuex';
import user from './user/index.js';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    user,
  },
});

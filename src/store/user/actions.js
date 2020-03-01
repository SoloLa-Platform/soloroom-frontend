import axios from 'axios';

const actions = {
  register({ commit }, credentials) {
    // {name='', password='', email=''}
    return axios
      .post('/register', credentials)
      .then(({ data }) => {
        commit('SET_USER_DATA', data);
      });
  },
  login({ commit }, { email = '', password = '' }) {
    return axios
      .post('/login', {email, password})
      .then(({ data }) => {
        commit('setInfo', data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('name', data.name);
      });
  },
  logout({ commit }) {
    commit('resetLoginInfo');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    return axios
      .post('/logout', {})
      .then((data) => {
        return data;
      }).catch((error) => {
        console.error(error);
      });
  },
};

export default actions;

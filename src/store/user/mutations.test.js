// import { shallowMount, createLocalVue } from '@vue/test-utils';
import mutations from './mutations.js';

describe('user actions', () => {
  beforeEach(() => {
  })
  describe('setInfo', () => {
    it(`should be called with \'/register\', {name:'aaaa', password:'bbb', email:'ccc@gmail.com'}`, () => {
      const state = { name: '', token: '' };
      const payload = { name: 'name', token: 'aaaa' }

      mutations.setInfo(state, payload);

      expect(state).toEqual(payload);
    });
  });

  describe('resetLoginInfo', () => {
    it(`should be called with \'/register\', {name:'aaaa', password:'bbb', email:'ccc@gmail.com'}`, () => {
      const state = { name: '111', token: '222' };

      mutations.resetLoginInfo(state);

      expect(state).toEqual({
        name: '',
        token: ''
      });
    });
  });
});

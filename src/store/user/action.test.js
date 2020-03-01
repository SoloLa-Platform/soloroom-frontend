// import { shallowMount, createLocalVue } from '@vue/test-utils';
import axios from 'axios';
import actions from './actions.js';

jest.mock('axios');
describe('user actions', () => {
  beforeEach(() => {
    axios.post.mockClear();
  })
  describe('register', () => {
    it(`should be called with \'/register\', {name:'aaaa', password:'bbb', email:'ccc@gmail.com'}`, async () => {
      axios.post.mockResolvedValue({});
      const commit = jest.fn();
      const FAKE_OBJECT = { name: 'aaaa', password: 'bbb', email: 'ccc@gmail.com' };

      await actions.register({ commit }, FAKE_OBJECT);

      expect(axios.post).toBeCalledWith('/register', FAKE_OBJECT);
    });
  });

  describe('login', () => {
    it('should call axios with email \'aaaa\' and password \'1234\'', async () => {
      const commit = jest.fn();
      const USER_OBJECT = { email: 'aaaa', password: '1234' }
      const MOCKED_RESPONSE_DATA = { token: '', name: '' }
      axios.post.mockResolvedValue({ data: MOCKED_RESPONSE_DATA });

      await actions.login({ commit }, USER_OBJECT);

      expect(axios.post).toBeCalledWith('/login', USER_OBJECT);
    });
  });

  describe('logout', () => {
    it('should call axios post with \'\\logout\'', async () => {
      const commit = jest.fn();
      const MOCKED_RESPONSE_DATA = { token: '', name: '' }
      axios.post.mockResolvedValue({ data: MOCKED_RESPONSE_DATA });

      await actions.logout({ commit });

      expect(axios.post).toBeCalledWith('/logout', {});
    });

    it('should console.error if axios.post is failed\'', async () => {
      const commit = jest.fn();
      const spy = jest.fn();
      global.console  = {
        error: spy
      }
      const MOCKED_RESPONSE_DATA = { token: '', name: '' }
      axios.post.mockRejectedValue({ data: MOCKED_RESPONSE_DATA });

      await actions.logout({ commit });

      expect(console.error).toBeCalledTimes(1);
    });

  });
});

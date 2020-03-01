import shallowMount from '@/utils/testHelper.js';
import NavigationBar from '@/components/NavigationBar.vue';

const createWrapper = (computed, propsData, options) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  shallowMount(NavigationBar, { computed, propsData, ...options });

describe('NavigationBar', () => {
  describe('computed', () => {
    describe('newURL', () => {
      it('should return \'/transcribe\' if this.isLoggedIn is true', () => {
          const wrapper = createWrapper({
            isLoggedIn: () => true,
          });

          expect(wrapper.vm.newURL).toBe('/transcribe');
      });
      it('should return \'/login\' if this.isLoggedIn is false', () => {
          const wrapper = createWrapper({
            isLoggedIn: () => false,
          });

          expect(wrapper.vm.newURL).toBe('/login');
        });
    });  
  });
  describe('methods', () => {
    describe('sendLogoutRequest', () => {
      it('should call this.logout once', async () => {
        const wrapper = createWrapper();
        wrapper.vm.logout = jest.fn().mockResolvedValue({});

        await wrapper.vm.sendLogoutRequest();

        expect(wrapper.vm.logout).toBeCalledTimes(1);
      });
    });
  });
});

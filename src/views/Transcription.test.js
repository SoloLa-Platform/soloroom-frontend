import { createLocalVue, shallowMount, mount } from '@vue/test-utils';
import Transcription from './Transcription.vue';

const localVue = createLocalVue();
jest.mock('opensheetmusicdisplay');

describe('test Transcription page', () => {
    describe('render', () => {
        it('should render components', () => {
            const wrapper = shallowMount(Transcription, {
              stubs: {
                Editor: {
                  name: 'Editor',
                  template: '<div/>',
                },
                PlayingControl: {
                  name: 'PlayingControl',
                  template: '<div/>'
                }
              },
            });
            expect(wrapper);
        });
    });
});

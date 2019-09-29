import { shallowMount } from '@vue/test-utils';
import Transcription from './Transcription.vue';

describe('test Transcription page', () => {
    describe('render', () => {
        it('should render page', () => {
            const wrapper = shallowMount(Transcription);
            expect(wrapper);
        });
    });
});
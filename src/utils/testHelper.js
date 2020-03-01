/* eslint-disable import/no-extraneous-dependencies */
/* eslint-env jest */
import Vue from 'vue';
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import store from '@/store/index';


import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(Vuex);


localVue.use(VueRouter);
const router = new VueRouter();

// Event bus
const EventBus = new Vue();

const GlobalPlugins = {
  install(v) {
    v.prototype.$bus = EventBus;
  },
};
localVue.use(GlobalPlugins);

export default function (component, options) {
  return shallowMount(component, {
    ...options,
    store,
    localVue,
    router,
  });
}

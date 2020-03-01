<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script lang="ts">
import Home from './pages/Home.vue';
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'App',
  components: {
    Home,
  },
  computed: {
    ...mapGetters('user', ['isLoggedIn']),
  },
});
</script>

<style lang="scss">
@import './assets/styles/global.scss';
</style>

<template>
  <div id="app">
    <NavigationBar />
    <router-view :class="{ page: !transcription }" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavigationBar from '@/components/NavigationBar.vue';

export default Vue.extend({
  name: 'App',
  components: {
    NavigationBar,
  },
  computed: {
    transcription() {
      if (this.$route.path === '/transcription') {
        return true;
      } else {
        return false;
      }
    },
  },
});
</script>

<style lang="scss">
// @import './assets/styles/global.scss';
</style>

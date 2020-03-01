<template>
  <div id="app">
    <NavigationBar />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import NavigationBar from '@/components/NavigationBar.vue';

export default {
  name: 'Home',
  components: {
    NavigationBar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>

<template>
  <div class="base-layout">
    <NavigationBar />
    <router-view />
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
.base-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>

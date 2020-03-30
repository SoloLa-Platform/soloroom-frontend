<template>
  <div class="navigation-bar">
    <router-link to="/" class="logo-text">Solola</router-link>
    <div class="action-button-container">
      <router-link v-if="$router.currentRoute.path==='/transcribe'" :to="newURL" class="button">New</router-link>
      <template v-if="isLoggedIn">
        <button type="button" @click="sendLogoutRequest">Logout</button>
        <!-- TODO : this will be replaced by icon to indicate user login status -->
        <div class="user-icon-block">
          <span class="nav-welcome">Hello {{ user.name }}.</span>
        </div>
      </template>
      <router-link v-if="!isLoggedIn" to="/login" class="button">Login</router-link>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'NavigationBar',
  computed: {
    ...mapGetters('user', ['isLoggedIn']),
    ...mapState(['user']),
    newURL() {
      return this.isLoggedIn ? '/transcribe' : '/login';
    },
  },
  methods: {
    ...mapActions('user', ['logout']),
    sendLogoutRequest() {
      this.logout().then(() => {
        this.$router.push({ path: '/' });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.logo-text {
  font-size: 2rem;
}

.navigation-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 70px;
  padding: 0.2em 1em;
  background: linear-gradient(to left, #6f7474, #c9cec9);
}

.nav-welcome {
  margin-left: auto;
  margin-right: 1rem;
  color: white;
}

a {
  font-weight: bold;
  color: #2c3e50;
  margin: auto 0.8em auto 0.4em;
  text-decoration: none;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
}

.nav-welcome {
  margin-left: 0;
}

.action-button-container {
  display: flex;
  width: auto;
}

.user-icon-block {
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>

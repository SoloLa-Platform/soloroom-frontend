<template>
  <div class="navigation-bar">
    <router-link to="/" class="text">Solola</router-link>

    <template v-if="user">
      <router-link to="transcription">Transcription</router-link>

      <span class="nav-welcome">Hello, {{ user.name }}.</span>

      <button type="button" class="logoutButton" @click="logout">
        Log out
      </button>
    </template>

    <template v-else>
      <router-link to="authenticate" class="button">Login</router-link>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation-bar {
  display: flex;
  align-items: center;
  min-height: 70px;
  padding: 0.2em 1em;
  background: linear-gradient(to right, #6f7474, #c9cec9);
  .text {
    font-size: 30px;
  }
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

.router-link-exact-active {
  color: white;
}

button,
.button {
  margin-left: auto;
  background: white;
  text-decoration: none;
  color: #2c3e50;

  &.router-link-active {
    color: #2c3e50;
  }
}

.logoutButton {
  cursor: pointer;
}

.nav-welcome + button {
  margin-left: 0;
}
</style>

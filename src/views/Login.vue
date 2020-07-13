<template>
  <div class="section">
    <form @submit.prevent="">
      <label for="email">Email:</label>
      <input v-model="email" type="email" name="email" />
      <label for="password">Password:</label>
      <input v-model="password" type="password" />
      <button class="action-button" @click="sendLoginRequest" name="button">
        Login
      </button>
      <a>
        <span>Don't have account?</span>
        <router-link to="/register" class="text">register</router-link>!
      </a>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions('user', ['login']),
    sendLoginRequest() {
      this.login({
        email: this.email,
        password: this.password,
      }).then(() => {
        if (this.user.token) {
          this.$router.push({ path: '/transcribe' });
        }
      });
    },
  },
  computed: {
    ...mapState(['user']),
  },
};
</script>

<style lang="scss" scoped></style>

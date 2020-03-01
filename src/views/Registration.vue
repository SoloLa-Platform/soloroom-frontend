<template>
  <div class="section">
    <form @submit.prevent="">
      <label for="name">Name:</label>
      <input v-model="name" type="text" name="name"/>
      <label for="email">Email:</label>
      <input v-model="email" type="email" name="email"/>
      <label for="password">Password:</label>
      <input v-model="password" type="password" />
      <p v-if="status === '400'">Please enter different info.</p>
      <button class="action-button" @click="sendRegisterRequest" name="button">Register</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Registration',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      status: null,
    };
  },
  methods: {
    ...mapActions('user', ['register']),
    sendRegisterRequest() {
      this.register({
        name: this.name,
        email: this.email,
        password: this.password,
      })
        .then(() => {
          this.$router.push({ path: '/' });
        })
        .catch(err => {
          this.status = err.response.status;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>

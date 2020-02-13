<template>
  <div class="home">
    <!-- header -->
    <header id="header" class="jumbotron text-center">
      <div class="container">
        <h1>Solola</h1>
        <p>Practice your solo from here.</p>
        <p>To your stage</p>
      </div>
    </header>

    <!-- <template v-if="!this.$store.state.user">
      <div>
        To use the app, you'll need to
        <router-link to="authenticate" @click.native="isNew(false)"
          >Login</router-link
        >
        or
        <router-link to="authenticate" @click.native="isNew(true)"
          >Register</router-link
        >
      </div>
    </template> -->
  </div>
</template>

<script>
export default {
  methods: {
    isNew(isNewUser) {
      this.$store.dispatch('isNewUser', !isNewUser);
    },
  },
};
</script>

<style>
/*=============================================
=                  Header                     =
=============================================*/

#header {
  padding: 250px 0;
  background-image: url('../assets/wallpaper.jpg');
  background-size: cover;
  color: #fff;
}

h1 {
  font-family: 'Montserrat-Black', sans-serif;
  font-size: 3.5rem;
  line-height: 1.5;
  font-weight: 900;
}

#header p {
  font-size: 2.5rem;
  font-weight: 600;
}
</style>

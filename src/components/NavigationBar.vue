<template>
  <nav id="navbar" class="navbar navbar-expand-md navbar-dark">
    <router-link to="/" class="text navbar-brand"
      ><span class="logo">Solo</span>La</router-link
    >

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search solo tab!"
          aria-label="Search"
        />
        <button class="btn btn-secondary" type="submit">Search</button>
      </form>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link to="about" class="button" href="#">About</router-link>
        </li>
        <li class="nav-item active">
          <router-link to="authenticate" class="button">Login</router-link>
          <!-- <a onclick="login()" class="nav-link" href="#">Login</a> -->
        </li>
      </ul>
    </div>

    <!-- <template v-if="user">
      <router-link to="transcription">Transcription</router-link>

      <span class="nav-welcome">Hello, {{ user.name }}.</span>

      <button type="button" class="logoutButton" @click="logout">
        Log out
      </button>
    </template>

    <template v-else>
      <router-link to="authenticate" class="button">Login</router-link>
    </template> -->
  </nav>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  }
}
</script>

<style lang="scss" scoped>
#navbar {
  background-color: rgb(255, 126, 66);
  padding: 0 3%;
}

.logo {
  color: #58d658;
}

// .navigation-bar {
//   display: flex;
//   align-items: center;
//   min-height: 70px;
//   padding: 0.2em 1em;
//   background: linear-gradient(to right, #6f7474, #c9cec9);
//   .text {
//     font-size: 30px;
//   }
// }


/* Navigation Bar */

.navbar-brand {
  font-family: sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
}

.nav-item {
  padding: 0 18px;
}

.button {
  font-size: 1.2rem;
  font-family: sans-serif;
  font-weight: bold;
  color: #fff;
  margin: auto;
}

.nav-welcome {
  margin-left: auto;
  margin-right: 1rem;
  color: white;
}

// a {
//   font-weight: bold;
//   color: #2c3e50;
//   margin: auto 0.8em auto 0.4em;
//   text-decoration: none;
//   border-top: 2px solid transparent;
//   border-bottom: 2px solid transparent;
// }

// .router-link-exact-active {
//   color: white;
// }

// button,
// .button {
//   margin-left: auto;
//   background: white;
//   text-decoration: none;
//   color: #2c3e50;

//   &.router-link-active {
//     color: #2c3e50;
//   }
// }

// .logoutButton {
//   cursor: pointer;
// }

// .nav-welcome + button {
//   margin-left: 0;
// }
</style>

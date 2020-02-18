<template>
  <!-- <form @submit.prevent="login"> -->
  <!-- Modal Login Form-->
  <div id="id01" class="modal">
    <form
      class="modal-content animate"
      @submit.prevent="login"
      action=""
      method="post"
    >
      <h2>Login</h2>
      <div class="container">
        <label for="email"><b>Email:</b></label>
        <input
          v-model="email"
          type="email"
          placeholder="Enter Email"
          name="email"
          required
        />
        <label for="password"><b>Password:</b></label>
        <input
          v-model="password"
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />
        
        <!-- <label> 
          <input type="checkbox" checked="checked" name="remember" /> Remember
          me
        </label> -->

        <router-link to="authenticate">Don't have an account?</router-link>

      </div>
      <div class="container">
        
        <img class="fb-icon" src="@/assets/fb.png" alt="">
        <img class="google-icon" src="@/assets/google.jpg" alt="">

        <button type="button" class="btn btn-secondary btn-lg"> 
          Login
        </button>
      </div>
    </form>
  </div>
  <!-- </div> -->

  <!-- <label for="email">Email:</label>
    <input v-model="email" type="email" name="email" value />
    <label for="password">Password:</label>
    <input v-model="password" type="password" name value />
    <p v-if="status === 400">Invalid login info.</p>
    <button type="submit" name="button">Login</button>
  </form> -->
</template>

<script>
export default {
  name: 'LoginUser',
  data() {
    return {
      email: '',
      password: '',
      status: null,
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: 'transcription' });
        })
        .catch(err => {
          this.status = err.response.status;
        });
    },
    cancel() {
      document.getElementById('id01').style.display = 'block';
    },
  },
};
</script>

<style lang="scss" scoped>
/*=============================================
=                  Modal Login                  =
=============================================*/

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Full-width input fields */
input[type='email'],
input[type='password'] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

form {
 padding: 10% 15%;
}


/* Extra styles for the cancel button */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.container {
  padding: 16px;
  background-color: '#f1f1f1';

  button {
    float: right;
  }
}

.fb-icon {
  width: 13%;
}

.google-icon {
  width: 20%;
}

img {
  margin: 2%;
}

/* The Modal (background) */
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  padding: 3% 15%;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

.modal h2 {
  text-align: center;
  font-weight: bold;
}

/* The Close Button (x) */
.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s;
}

@-webkit-keyframes animatezoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes animatezoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>

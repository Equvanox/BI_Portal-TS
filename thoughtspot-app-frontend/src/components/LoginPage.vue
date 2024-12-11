<template>
  <div class="login-page">
    <div class="login-image" >
    </div>
    <div class="login-form">
      <div class="sign-in">
        <h2>Sign in</h2>
        <table>
        <tbody>
        <tr>
          <td><h4>Username  </h4></td>
          <td><input type="text" v-model="username" placeholder="Username" /></td>
        </tr>
        <tr>
          <td><h4>Password  </h4></td>
          <td><input type="password" v-model="password" placeholder="Password" /></td>  
        </tr>
        </tbody>
        </table>
        <button @click="login">Sign in</button>

        <div class="okta-login">
          <button @click="oktaLogin">Okta Login</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import '@/styles/LoginPageStyle.css';
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/login', {
          username: this.username,
          password: this.password
        });
        if ( response == null ) {
          throw new Error('Invalid username or password');
        }
        localStorage.setItem('token', response.data.token);
        this.$router.push('/home');
      } catch (error) {
        alert('Invalid credentials');
      }
    },
    oktaLogin() {
      this.$auth.signInWithRedirect('/login/callback');
    },
  }
};
</script>


<style>
</style>
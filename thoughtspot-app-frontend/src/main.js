import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { OktaAuth } from '@okta/okta-auth-js';
import { OktaVuePlugin } from '@okta/okta-vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const oktaAuthConfig = new OktaAuth({
  issuer: 'https://dev-28776161.okta.com/oauth2/default',
  clientId: '0oalmh6z3hiWy3hwp5d7',
  redirectUri: 'http://localhost:8080/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
});

const app = createApp(App);
app.use(router).use(OktaVuePlugin, { oktaAuth: oktaAuthConfig });
app.mount('#app');
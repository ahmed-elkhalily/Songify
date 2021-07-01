import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router/index';
import validate from './includes/validate';
import { auth } from './includes/firebase';
import './assets/tailwind.css';
import './assets/main.css';

let app = null;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    app.use(store);
    app.use(router);
    app.use(validate);

    app.mount('#app');
  }
});

import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import validate from './includes/validate';
import { auth } from './includes/firebase';
import './assets/tailwind.css';
import './assets/main.css';

let vm = null;
auth.onAuthStateChanged(() => {
  if (!vm) {
    vm = createApp(App);
    vm.use(store);
    vm.use(validate);

    vm.mount('#app');
  }
});

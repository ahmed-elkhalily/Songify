import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import validate from './includes/validate';
import './assets/tailwind.css';
import './assets/main.css';

const vm = createApp(App);
vm.use(store);
vm.use(validate);

vm.mount('#app');

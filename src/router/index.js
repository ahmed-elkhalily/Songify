import { createRouter, createWebHistory } from 'vue-router';
import Manage from '@/views/Manage.vue';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import store from '@/store';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  { name: 'about', path: '/about', component: About },
  {
    name: 'manage',
    path: '/manage-music',
    component: Manage,
    meta: {
      requireAuthLogin: true
    }
  },
  {
    path: '/manage', // old path || similer paths
    redirect: { name: 'manage' }
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-400'
});

// navigation guards
router.beforeEach((to, from, next) => {
  // not going to the field with requireAuthLogin ? ok go ahead to the link
  if (!to.matched.some(item => item.meta.requireAuthLogin)) {
    next();
    return;
  }
  if (store.state.authLogin) next();
  else next({ name: 'home' });
});

export default router;

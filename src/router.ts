import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/ListSection.vue'),
    },
    {
      path: '/transcribe',
      name: 'transcribe',
      component: () => import('./views/Transcription.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Registration.vue'),
    },
  ],
});

const publicPages = ['/login', '/', '/register'];
router.beforeEach((to, from, next) => {
  const isAuthenticationRequired = !publicPages.includes(to.path);
  if (!store.getters['user/isLoggedIn'] && isAuthenticationRequired) {
    next('login');
  }
  next();
});

export default router;

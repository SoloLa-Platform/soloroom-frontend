import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./pages/Home.vue'),
    },
    {
      path: '/transcription',
      name: 'transcription',
      component: () => import('./pages/transcription/Transcription.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/authenticate',
      name: 'authenticate',
      component: () => import('./pages/Authenticate.vue'),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});

router.beforeEach((to, from, next) => {
  // redirect to login page if user is not logged in and trying to access a restricted page
  const publicPages = ['/authenticate', '/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/authenticate');
  }

  next();
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import AdminPanel from './components/AdminPanel';
import LoginForm from './components/LoginForm';
import AuthService from './services/AuthService';

const routes = [
  {
    path: '/',
    name: 'LoginForm',
    component: LoginForm,
  },
  {
    path: '/admin',
    name: 'AdminPanel',
    component: AdminPanel,
    meta: { requiresAuth: true }, // exige autenticação
  },
];

const router = createRouter({
  history: createWebHistory(),
  base: '/',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!AuthService.isAuthenticated()) {
      next({ name: 'LoginForm' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import AdminPanel from './components/AdminPanel.vue';
import LoginForm from './LoginForm.vue';

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
  routes,
});

// Verifica se o usuário está autenticado antes de acessar as rotas protegidas
router.beforeEach((to, from, next) => {
  const isAuthenticated = true; /* Lógica para verificar se o usuário está autenticado */
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'LoginForm' }); // Redireciona para a página de login se não estiver autenticado
  } else {
    next();
  }
});

export default router;

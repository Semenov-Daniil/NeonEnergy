import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import Product from '@/views/Product.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main,
    meta: {
      title: "Главная"
    }
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `NeonEnergy - ${to.meta.title}`;
  next();
});

export default router

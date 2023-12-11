import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import Product from '@/views/Product.vue'
import NotFound from '@/views/NotFound.vue'
import About from '@/views/About.vue'
import Catalog from '@/views/Catalog.vue'

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
        path: '/product/:title',
        name: 'product',
        component: Product,
        meta: {
            title: "Продукт"
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: "Страница не найдена"
        }
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
            title: "О нас"
        }
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: Catalog,
        meta: {
            title: "Каталог"
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.name == 'product') {
        document.title = `NeonEnergy - ${to.params.title.replace(/-/g, ' ')}`;
    } else {
        document.title = `NeonEnergy - ${to.meta.title}`;
    }
    next();
});

export default router

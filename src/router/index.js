import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import Product from '@/views/Product.vue'
import NotFound from '@/views/NotFound.vue'
import About from '@/views/About.vue'

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
        component: NotFound 
    },
    { 
        path: '/about', 
        name: 'about', 
        component: About 
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

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('./views/Home.vue')
    },
    {
        path: '/donate',
        component: () => import('./views/Donate.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
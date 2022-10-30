import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PanelLoginView from '@/views/panel/PanelLoginView.vue';
import PanelView from '@/views/panel/PanelView.vue';
import Error404 from '@/views/errors/404View.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: Error404,
    },
    {
        path: '/panel',
        name: 'panelLogin',
        component: PanelLoginView,
        children: [
            {
                path: '',
                name: 'panel',
                component: PanelView,
            },
        ]
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
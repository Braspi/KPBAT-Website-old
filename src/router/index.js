import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PanelView from '@/views/panel/PanelView.vue';
import PanelLoginView from '@/views/panel/PanelLoginView.vue';
import GalleryPanelView from '@/views/panel/GalleryPanelView.vue';
import StatsView from '@/views/panel/StatsView.vue';
import Error404 from '@/views/errors/404View.vue';
import CategoryView from '@/views/gallery/CategoryView.vue';

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
        name: 'panel',
        component: PanelView,
        children: [
            {
                path: 'login',
                name: 'panelLogin',
                component: PanelLoginView
            },
            {
                path: 'gallery',
                name: 'galleryPanel',
                component: GalleryPanelView
            },
            {
                path: 'stats',
                name: 'stats',
                component: StatsView
            },
        ]
    },
    {
        path: '/category',
        name: 'category',
        component: CategoryView,
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PanelView from '@/views/panel/PanelView.vue';
import PanelLoginView from '@/views/panel/PanelLoginView.vue';
import GalleryPanelView from '@/views/panel/GalleryPanelView.vue';
import StatsView from '@/views/panel/StatsView.vue';
import UsersView from '@/views/panel/ManageUsersView.vue';
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
        name: 'panel',
        component: PanelView,
        meta: {
            isLoggedIn: true
        },
        children: [
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
            {
                path: 'users',
                name: 'users',
                component: UsersView
            },
        ]
    },
    {
        path: '/login',
        name: 'panelLogin',
        component: PanelLoginView
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

import axios from 'axios';

router.beforeEach(async (to, from, next) => {
    if(to.matched.some(record => record.meta.isLoggedIn)){
        try {
            const user = await axios.get('/api/auth/me', { headers: { "Authorization": `Baerer ${localStorage.accessToken}` } });
            console.log(user);
        } catch (error) {
            return next('/login')
        }
    }
    next()
})

export default router
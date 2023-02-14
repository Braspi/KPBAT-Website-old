import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

import PanelView from '@/views/panel/PanelView.vue';
import PanelLoginView from '@/views/panel/PanelLoginView.vue';
import GalleryPanelView from '@/views/panel/GalleryPanelView.vue';
import CategoryPanelView from '@/views/panel/CategoryPanelView.vue';
import StatsView from '@/views/panel/StatsView.vue';
import UsersView from '@/views/panel/ManageUsersView.vue';
// import OurServicesView from '@/views/OurServicesView.vue';

import GalleryView from '@/views/GalleryView.vue';

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
        path: '/gallery',
        name: 'gallery',
        component: GalleryView,
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
                children: [
                    {
                        path: '',
                        name: 'galleryPanel',
                        component: GalleryPanelView,
                    },
                    {
                        path: ':id',
                        name: 'galleryCategory',
                        component: CategoryPanelView,
                    }
                ]
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
    {
        path: '/ourservices',
        name: 'ourServices',
        component: OurServicesView
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
            await axios.get('/api/auth/me', { headers: { "Authorization": `Baerer ${localStorage.accessToken}` } });
        } catch (error) {
            return next('/login')
        }
    }
    next()
})

export default router

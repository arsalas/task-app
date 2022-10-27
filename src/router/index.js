import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'tasks',
        component: () => import('../views/Tasks.vue')
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import('../layouts/Auth.vue'),
        redirect: { name: 'login' },
        children: [
            {
                path: 'log-in',
                name: 'login',
                component: () => import('../views/Login.vue')
            },
            {
                path: 'sign-in',
                name: 'signin',
                component: () => import('../views/Signin.vue')
            },

        ]
    },
    {
        path: '/confirm-email',
        name: 'confirm',
        component: () => import('../layouts/ConfirmEmail.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'error',
        component: () => import('../layouts/404.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
})




export default router;
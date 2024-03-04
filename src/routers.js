import PageHome from './components/PageHome.vue'
import SignUp from './components/SignUp.vue';
import PageLogin from './components/PageLogin.vue';
import AddR from './components/AddR.vue';
import UpdateR from './components/UpdateR.vue';
import { createRouter,createWebHistory } from 'vue-router';



const routes = [
    {
        name: 'PageHome',
        component: PageHome,
        path: '/',
        // meta: { requiresAuth: true }
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up',
        // meta: { requiresAuth: false }
    },
    {
        name: 'PageLogin',
        component: PageLogin,
        path: '/log-in',
        // meta: { requiresAuth: false }
    }
    ,
    {
        name: 'AddR',
        component: AddR,
        path: '/addr',
        // meta: { requiresAuth: true }
    },
    {
        name: 'UpdateR',
        component: UpdateR,
        path: '/updater:id',
        // meta: { requiresAuth: true }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
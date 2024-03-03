import PageHome from './components/PageHome.vue'
import SignUp from './components/SignUp.vue';
import PageLogin from './components/PageLogin.vue';
import { createRouter,createWebHistory } from 'vue-router';



const routes = [
    {
        name: 'PageHome',
        component: PageHome,
        path: '/',
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up',
    },
    {
        name: 'PageLogin',
        component: PageLogin,
        path: '/log-in',
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
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
    ,
    {
        name: 'AddR',
        component: AddR,
        path: '/addr',
    },
    {
        name: 'UpdateR',
        component: UpdateR,
        path: '/updater',
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
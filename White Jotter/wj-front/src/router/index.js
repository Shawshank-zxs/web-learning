import Vue from 'vue'
import VueRouter from 'vue-router'
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Home from '@/components/Home'
import LibraryIndex from '@/components/library/LibraryIndex'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'index',
        redirect: '/index',
        component: AppIndex,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        // home页面不需要被访问
        redirect: '/index',
        children: [
        {
            path: '/index',
            name: 'AppIndex',
            component: AppIndex,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/library',
            name: 'Library',
            component: LibraryIndex,
            meta: {
                requireAuth: true
            }
        }
      ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

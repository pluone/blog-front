import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DevTools from '../views/DevTools.vue'
import Login from '../views/Login.vue'
import Blogs from '../views/Blogs.vue'
import BlogDetial from '../views/BlogDetial.vue'
import BlogEdit from '../views/BlogEdit.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tools',
    name: '开发小工具',
    component: DevTools
  },
  {
    path: '/login',
    name: '登录',
    component: Login
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/blog/add',
    name: 'BlogAdd',
    component: BlogEdit,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/blog/:blogId',
    name: 'BlogDetail',
    component: BlogDetial
  },
  {
    path: '/blog/:blogId/edit',
    name: 'BlogEdit',
    component: BlogEdit,
    meta: {
      requireAuth: true
    }
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

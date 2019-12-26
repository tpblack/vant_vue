import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children: [
      {
        path: '',
        name: 'home',
        // 路由懒加载
        component: () => import('@/views/Home')
      },
      {
        path: '/type',
        name: 'type',
        // 路由懒加载
        component: () => import('@/views/Type')
      },
      {
        path: '/shop',
        name: 'shop',
        // 路由懒加载
        component: () => import('@/views/Shop')
      },
      {
        path: '/user',
        name: 'user',
        // 路由懒加载
        component: () => import('@/views/User')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

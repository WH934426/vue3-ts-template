import type { RouteRecordRaw } from 'vue-router'


// 静态路由配置
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/index.vue')
  },
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/error/NotFound.vue')
  },
  // TODO:必须放置在最后
  { path: '/:pathMatch(.*)*', redirect: '/404' }
]

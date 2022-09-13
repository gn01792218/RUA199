import { createRouter, createWebHistory, RouteRecordRaw ,createWebHashHistory} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    component:()=>import('@/views/HomePage.vue')
  },
  {
    path: '/ContactPage',
    name: 'ContactPage',
    component:()=>import('@/views/ContactPage.vue')
  },
  {
    path: '/DownloadPage',
    name: 'DownloadPage',
    component:()=>import('@/views/DownloadPage.vue')
  },
  {
    path: '/HowToPage',
    name: 'HowToPage',
    component:()=>import('@/views/HowToPage.vue')
  },
  {
    path: '/PromotionsPage',
    name: 'PromotionsPage',
    component:()=>import('@/views/PromotionsPage.vue')
  },
  {
    path: '/QAPage',
    name: 'QAPage',
    component:()=>import('@/views/QAPage.vue')
  },
  {
    path: '/VipPage',
    name: 'VipPage',
    component:()=>import('@/views/VipPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL as string),
  // history:createWebHashHistory(),
  routes
})
export default router

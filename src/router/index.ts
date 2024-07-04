import { createRouter, createWebHistory } from 'vue-router'

//移动段
import VHome from '@/viewVersion/home/view.vue'

//pc段
import Home from '@/views/home/view.vue'
import course from '@/views/course/view.vue'
import news from '@/views/news/view.vue'
import product from '@/views/product/view.vue'
import serve from '@/views/serve/view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { requiresDesktop: true, requiresMobile: false } // 根据需要设置meta字段
    },
    {
      path: '/VHome',
      name: 'VHome',
      component: VHome,
    },
    {
      path: '/course',
      name: 'course',
      component: course
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/serve',
      name: 'serve',
      component: serve
    },
  ]
})
router.beforeEach((to, from, next) => {
  const isDesktop = window.innerWidth < 768;
  const requiresDesktop = to.meta.requiresDesktop
  const requiresMobile = to.meta.requiresMobile
  if (requiresDesktop && isDesktop) {
    next('/VHome'); // 跳转到移动端页面
  } else if (requiresMobile && isDesktop) {
    next('/'); // 跳转到PC端页面
  } else {
    next();
  }
});
export default router

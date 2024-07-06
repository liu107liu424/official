import { createRouter, createWebHistory } from 'vue-router'

//移动段
import HomeApp from '@/appView/home/view.vue'

//pc段
import maxView from '@/views/maxView/view.vue'
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
      name: 'maxView',
      component: maxView,
      meta: { requiresDesktop: true, requiresMobile: false },
      children: [
        {
          path: '/Home',
          name: 'Home',
          component: Home
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
    },
    {
      path: '/HomeApp',
      name: 'HomeApp',
      component: HomeApp,
      meta: { requiresDesktop: false, requiresMobile: true },
    },

  ]
})
router.beforeEach((to, from, next) => {
  const isDesktop = window.innerWidth < 500;
  const requiresDesktop = to.meta.requiresDesktop
  const requiresMobile = to.meta.requiresMobile
  if (requiresDesktop && isDesktop) {
    next('/HomeApp'); // 跳转到移动端页面
  } else if (requiresMobile && !isDesktop) {
    next('/Home'); // 跳转到PC端页面
  } else {
    next();
  }
});
export default router

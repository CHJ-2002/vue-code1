import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'

// 把VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

// 路由规则的数组
const routes = [
  { path: '/', component: Home, meta: { isRoute: true, top: 0 } },
  { path: '/user', component: User }
]

// 创建路由实例对象
const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: to.meta.top || 0 }
    }
  }
})

export default router

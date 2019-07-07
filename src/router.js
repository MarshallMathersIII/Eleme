import Vue from 'vue'
import Router from 'vue-router'
import goods from './components/goods/goods.vue'
import rattings from './components/rattings/rattings.vue'
import seller from './components/seller/seller.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/rattings',
      name: 'rattings',
      component: rattings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ],
  // 对a标签默认class配置
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link'
})

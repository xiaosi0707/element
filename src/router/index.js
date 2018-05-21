import Vue from 'vue'
import Router from 'vue-router'
import Location from '@/components/location'
import Address from '@/components/address'
import Index from '@/components/index'
import Search from '@/components/search'
import Classify from '@/components/classify'
import Shop from '@/components/shop'
import accountInfo from '@/components/account-info'
import My from '@/components/my'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'location',
      component: Location
    },
    {
      path: '/address/:cityId?',
      name: 'address',
      component: Address
    },
    {
      path: '/index/:addressInfo',
      name: 'index',
      component: Index
    },
    {
      path: '/search/:geohash?',
      name: 'Search',
      component: Search
    },
    {
      path: '/classify/:latitude?/:longitude?/:classifyId?',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/shop/:shopid?',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/account-info',
      name: 'accountInfo',
      component: accountInfo
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Location from '@/components/location'
import Address from '@/components/address'
import Index from '@/components/index'
import Search from '@/components/search'
import Classify from '@/components/classify'

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
    }
  ]
})

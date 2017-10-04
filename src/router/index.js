import Vue from 'vue'
import Router from 'vue-router'
import MyRE from '@/components/MyRE'
import MyRE2 from '@/components/MyRE2'
import TestRE from '@/components/TestRE'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/re',
      name: 'RegEx',
      component: MyRE
    },
    {
      path: '/testre',
      name: 'TestRegEx',
      component: TestRE
    },
    {
      path: '/re2',
      name: 'RegEx2',
      component: MyRE2
    }
  ]
})

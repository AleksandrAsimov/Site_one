import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import ConfirmW from '@/components/ConfirmW'
import Contact from '@/components/Contact'
import Index from '@/components/Index'
// import App from '../App'

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/confirm',
      name: 'ConfirmW',
      component: ConfirmW
    }
  ]
})

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import NotFound from './views/NotFound.vue'


Vue.use(VueRouter)


import './scss/main.scss';

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home, meta: { title: 'Insulation and Roofing Rios' } },
    { path: '/about', component: About, meta: { title: 'Insulation and Roofing Rios' } },
    { path: '/contact', component: Contact, meta: { title: 'Insulation and Roofing Rios' } },
    { path: '*', component: NotFound, meta: { title: 'Insulation and Roofing Rios' } },
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

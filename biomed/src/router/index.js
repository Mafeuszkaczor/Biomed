import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Offer from '../views/Offer.vue'
import Contact from '../views/Contact.vue' 

const routes = [
  { path: '/', component: Home },
  { path: '/oferta', component: Offer },
  { path: '/kontakt', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
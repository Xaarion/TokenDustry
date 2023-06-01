import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InscriptionView from '../views/InscriptionView.vue'
import ConnexionView from '../views/ConnexionView.vue'
import BackOfficeCrypto from '../views/BackOfficeCrypto.vue'
import BackOfficeCreationCrypto from '../views/BackOfficeCreationCrypto.vue'
import CreationOffre from '../views/CreationOffre.vue'
import OffreView from '../views/OffreView.vue'

const routes = [
  {
    path: '/OffreView',
    name: 'OffreView',
    component: OffreView
  },
  {
    path: '/BackOfficeCrypto',
    name: 'BackOfficeCrypto',
    component: BackOfficeCrypto
  },
  {
    path: '/HomeView',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/BackOfficeCreationCrypto',
    name: 'BackOfficeCreationCrypto',
    component: BackOfficeCreationCrypto
  },
  {
    path: '/CreationOffre',
    name: 'CreationOffre',
    component: CreationOffre
  },
  {
    path: '/Inscription',
    name: 'Inscription',
    component: InscriptionView
  },
  {
    path: '/',
    name: 'Connexion',
    component: ConnexionView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router

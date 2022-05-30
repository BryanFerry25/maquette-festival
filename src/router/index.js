

import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import Programmation from '../views/Programmation.vue'
import MentionsLegales from '../views/MentionsLegales.vue'
import Festival from '../views/Festival.vue'
import Contact from '../views/Contact.vue'
import Concert from '../views/Concert.vue'
import Artistes from '../views/Artistes.vue'
import ArtistePage from '../views/ArtistePage.vue'
import ArtistePage from '../views/ArtistePage.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/programmation', name: 'Programmation', component: Programmation },
    { path: '/MentionsLegales', name: 'MentionsLegales', component: MentionsLegales },
    { path: '/Festival', name: 'Festival', component: Festival },
    { path: '/Contact', name: 'Contact', component: Contact },
    { path: '/Concert', name: 'Concert', component: Concert },
    { path: '/Artistes', name: 'Artistes', component: Artistes },
    { path: '/ArtistePage', name: 'ArtistePage', component: ArtistePage },




  ]
})


export default router

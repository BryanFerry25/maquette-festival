

import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import Programmation from '../views/Programmation.vue'
import MentionsLegales from '../views/MentionsLegales.vue'
import Festival from '../views/Festival.vue'
import Contact from '../views/Contact.vue'
import Concert from '../views/Concert.vue'
import Artistes from '../views/Artistes.vue'
import ArtistePage from '../views/ArtistePage.vue'
import Page404 from '../views/Page404.vue'
import styleguideView from '../views/styleguideView.vue'
import TestBDD from '../views/TestBDD.vue'
import LoginView from '../views/LoginView.vue'
import CreateArtiste from '../views/Artiste/CreateArtiste.vue'
import DeleteArtiste from '../views/Artiste/DeleteArtiste.vue'
import GestionArtiste from '../views/Artiste/GestionArtiste.vue'
import UpdateArtiste from '../views/Artiste/UpdateArtiste.vue'


import { getAuth } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js'
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/programmation', name: 'Programmation', component: Programmation },
    { path: '/MentionsLegales', name: 'MentionsLegales', component: MentionsLegales },
    { path: '/Festival', name: 'Festival', component: Festival },
    { path: '/Contact', name: 'Contact', component: Contact },
    { path: '/Concert', name: 'Concert', component: Concert },
    { path: '/Artistes', name: 'Artistes', component: Artistes },
    { path: '/ArtistePage', name: 'ArtistePage', component: ArtistePage },
    { path: '/style-guide', name: 'styleguideView', component: styleguideView },
    { path: '/test', name: 'TestBDD', component: TestBDD },
    { path: '/Login', name: 'LoginView', component: LoginView },
    { path: '/create', name: 'CreateArtiste', component: CreateArtiste },
    { path: '/delete', name: 'DeleteArtiste', component: DeleteArtiste },
    { path: '/update', name: 'UpdateArtiste', component: UpdateArtiste },
    { path: '/gestion', name: 'GestionArtiste', component: GestionArtiste },
    { path: '/:pathMatch(.*)*', name: 'Page404', component: Page404 },
   





  ]
})


function guard(to, from, next) {
  getAuth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('router OK => user ', user);
      const firestore = getFirestore();
      const dbUsers = collection(firestore, "users");
      const q = query(dbUsers, where("uid", "==", user.uid));
      onSnapshot(q, (snapshot) => {
        let userInfo = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        let isAdmin = userInfo[0].admin;
        if (isAdmin) {
          next(to.params.name);
          return;
        } else {
          alert("Vous n'avez pas l'autorisation pour cette fonction");
          next({ name: "HomeView" });
          return;
        }
      })
    } else {
      console.log('router NOK => user ', user);
      next({ name: "HomeView" });
    }
  });
}

export default router

<template>
  <div class="mt-12 px-5 flex flex-col gap-20 relative">
    <h1 class="font-smythe text-2xl">Latest updates</h1>
    <NewsCards v-for="latest in Liste" :key="latest" :content="latest.content" :img="latest.img" :titre="latest.titre" :type="latest.type"/>


    <PresentationArtiste
etoile1="#FBBF24"
etoile2="#FBBF24"
etoile3="#FBBF24"
etoile4="#FFFFFF"
etoile5="#FFFFFF"

ImageArtiste="/images/artiste1.webp"
textebouton="Tony Flapper"

lien="/ArtistePage"/>
  </div>
</template>

<script>
import {
    getFirestore,
    collection,
    doc,
    query,
    orderBy,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js'
import { 
    getStorage,             // Obtenir le Cloud Storage
    ref,                    // Pour créer une référence à un fichier à uploader
    getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
    uploadString,           // Permet d'uploader sur le Cloud Storage une image en Base64
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js'

import PresentationArtiste from '../components/PresentationArtiste.vue'

export default {
  components:{ PresentationArtiste},
  data(){
        return{
            Liste:[],
            query:'',
        }
    },
    mounted(){
      this.getListe();
    },
    methods:{
      async getListe(){
        const firestore = getFirestore();
          const dbArt = collection(firestore, "latests");
          const q = query(dbArt, orderBy('date', 'desc'));
          await onSnapshot(q, (snapshot) =>{
              this.ListeLatest = snapshot.docs.map(doc =>({
                  id:doc.id, ...doc.data()
              }))
          this.ListeLatest.forEach(function(personne){
              const storage = getStorage();
              const spaceRef = ref(storage, 'latest/'+personne.img);
              getDownloadURL(spaceRef)
              .then((url) =>{
                  personne.img = url;
              })
              .catch((error) =>{
                  console.log('erreur download url', error);
              })
          })
          
          })
      },
    },
}
</script>

<template>

<header class="mb-10">
<HeaderPage
 LienSuivant="/Festival"
    LienAvant="/programmation"
    PageAvant="Programmation"
    PageApres="Le festival"
    ImageHeader="/images/Fleche.svg"/>
</header>
<main>
<TitrePage
Titre="Les Artistes"/>

<img class="w-screen mt-12" src="../../public/images/artiste_intro.webp" alt="artiste image intro">
<div class=" bg-fond-gris -mt-7 pt-20">


<h2 class=" font-poppins font-semibold text-white text-center mt-7 text-10xl md:text-11xl lg:text-14xl xl:text-16xl textpadding mb-7 effet-shadowblanc ">Nos différents 
Artistes</h2>

<p class=" font-plus-jakarta-sans font-normal textresponsive textpadding text-center text-legende mb-20">Vous pouvez retrouver ici tous les différents artistes qui seront présents pendant ces 2 prochaines années.</p>


<FlecheDown/>


<div class=" my-32">
<TitreOnde
Titre="Les DJ"/>
</div>

<div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(285px,1fr))]">




  <div class=" ml-7">
    <div v-for="artistes in listart" :key=artistes.id>
<PresentationArtiste
etoile1="#FBBF24"
etoile2="#FBBF24"
etoile3="#FBBF24"
etoile4="#FFFFFF"
etoile5="#FFFFFF"
:ImageArtiste="artistes.photo"
:textebouton="artistes.nom"

lien="/ArtistePage"/>
</div>
</div>


<div class=" ml-7">
<PresentationArtiste
etoile1="#FBBF24"
etoile2="#FBBF24"
etoile3="#FBBF24"
etoile4="#FBBF24"
etoile5="#FFFFFF"
ImageArtiste="/images/artiste2.webp"
textebouton="Dimitri Kil"/>
</div>

<div class=" ml-7">
<PresentationArtiste
etoile1="#FBBF24"
etoile2="#FBBF24"
etoile3="#FBBF24"
etoile4="#FBBF24"
etoile5="#FBBF24"
ImageArtiste="/images/artiste3.webp"
textebouton="Dasilva Fulo"/>


</div>

<div class=" ml-7">
<PresentationArtiste
etoile1="#FBBF24"
etoile2="#FBBF24"
etoile3="#FBBF24"
etoile4="#FFFFFF"
etoile5="#FFFFFF"
ImageArtiste="/images/artiste4.webp"
textebouton="Anthony Diry"/>
</div>

</div>

<div class=" my-32">
<TitreOnde
Titre="Les producteurs"/>
</div>


<div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(285px,1fr))]">

  <div class=" ml-7">
<PresentationArtiste
etoile1="#FBBF24"
etoile2="#FBBF24"
etoile3="#FBBF24"
etoile4="#FFFFFF"
etoile5="#FFFFFF"
ImageArtiste="/images/artiste5.webp"
textebouton="Milano Kat"/>
</div>


<div class=" ml-7">
<PresentationArtiste
etoile1="#FBBF24"
etoile2="#FBBF24"
etoile3="#FBBF24"
etoile4="#FBBF24"
etoile5="#FFFFFF"
ImageArtiste="/images/artiste6.webp"
textebouton="Baptiste Tablier"/>
</div>

<div class=" ml-7">
<PresentationArtiste
etoile1="#FBBF24"
etoile2="#FBBF24"
etoile3="#FBBF24"
etoile4="#FBBF24"
etoile5="#FBBF24"
ImageArtiste="/images/artiste7.webp"
textebouton="Hugo Lobado"/>


</div>

<div class=" ml-7">
<PresentationArtiste
etoile1="#FBBF24"
etoile2="#FFFFFF"
etoile3="#FFFFFF"
etoile4="#FFFFFF"
etoile5="#FFFFFF"
ImageArtiste="/images/artiste8.webp"
textebouton="Coumba Surez"/>
</div>

</div>

<footer>
  <Footer/>
</footer>

</div>


</main>

</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Footer from "../components/Footer.vue"
import HeaderPage from "../components/HeaderPage.vue"
import TitrePage from "../components/TitrePage.vue"
import FlecheDown from "../components/icons/FlecheDown.vue"
import TitreOnde from "../components/TitreOnde.vue"
import PresentationArtiste from "../components/PresentationArtiste.vue"

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
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'

import { 
    getStorage,             // Obtenir le Cloud Storage
    ref,                    // Pour créer une référence à un fichier à uploader
    getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
    uploadString,           // Permet d'uploader sur le Cloud Storage une image en Base64
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js'

export default {
    
    data(){
      return{
        listart:[],

      }
    },
    mounted(){
      this.getArtiste();
    },
    methods:{
      async getArtiste(){
        const firestore = getFirestore();
          const dbArt = collection(firestore, "artistes");
          const q = query(dbArt, orderBy('nom', 'asc'));
          await onSnapshot(q, (snapshot) =>{
              this.listart = snapshot.docs.map(doc =>({
                  id:doc.id, ...doc.data()
              }))
          this.listart.forEach(function(artistes){
              const storage = getStorage();
              const spaceRef = ref(storage, 'artistes/'+artistes.photo);
              getDownloadURL(spaceRef)
              .then((url) =>{
                  artistes.photo = url;
              })
              .catch((error) =>{
                  console.log('erreur download url', error);
              })
          })
          
          })
      }
    },
   
  components: {Footer, HeaderPage,TitrePage,FlecheDown,TitreOnde,PresentationArtiste }
};
</script>

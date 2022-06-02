<template>
<header class="mb-10">
<HeaderPage
 LienSuivant="/Festival"
    LienAvant="/Artistes"
    PageAvant="Artistes"
    PageApres="Le festival"
    ImageHeader="/images/Fleche.svg"/>
</header>

<main>


<TitrePage
Titre="Programmation"/>

<img class="w-screen mt-12" src="../../public/images/programmation_intro.webp" alt="programmation image intro">
<div class=" bg-fond-gris -mt-7 pt-20">

<h2 class=" font-poppins font-semibold text-white text-center mt-7 text-10xl md:text-11xl lg:text-14xl xl:text-16xl textpadding mb-7 effet-shadowblanc ">Nos différents concerts</h2>

<p class=" font-plus-jakarta-sans font-normal textresponsive textpadding text-center text-legende mb-14">Vous pouvez retrouver ici tout les différents concerts qui sont organisé pendant ces 2 prochaines années.</p>


<FlecheDown/>

<TitreOnde 
 Titre="Drum and Bass"/> 


 <h2 class="  font-plus-jakarta-sans  p-8 text-center textresponsive textpadding  text-white"> Retrouver au cours de ses concerts un DJ de drum and bass qui enchaine les morceaux, utilisant des effets et mixant avec plusieurs platines. On peut comparer ce genre avec l’éléctro plus rythmé  </h2>


<div v-for="drumbass in listdrum" :key=drumbass.id >
<Bouton 
:textebouton="drumbass.titre"
:lien="drumbass.url"
/>

<p class=" font-plus-jakarta-sans font-normal textresponsive textpadding text-center text-legende mb-14 mt-5"> {{ drumbass.txt }} </p>
</div>

<Bouton 
textebouton="Funky town"
/>

<p class=" font-plus-jakarta-sans font-normal textresponsive textpadding text-center text-legende mb-14 mt-5">Juin 2022 - 1 jour </p>


<Bouton 
textebouton="Electr’hard"
/>

<p class=" font-plus-jakarta-sans font-normal textresponsive textpadding text-center text-legende mb-14 mt-5">Août 2022 - 3 jours </p>

<Bouton 
textebouton="Never’sleep"
/>

<p class=" font-plus-jakarta-sans font-normal textresponsive textpadding text-center text-legende mb-14 mt-5">Juin et Aout 2023 - 2 jours </p>

<TitreOnde 
 Titre="Électronique"/> 


 <h2 class="  font-plus-jakarta-sans  p-8 text-center textresponsive textpadding  text-white"> Retrouver au cours de ses concerts un DJ spécialisé dans le mixage qui vous fera monté en adranéline avec un rythme de musique paliptant.   </h2>

<Bouton 
textebouton="Partyx"
/>

<p class=" font-plus-jakarta-sans font-normal textresponsive textpadding text-center text-legende mb-14 mt-5">Mai et Juin 2022 -3 jours </p>


<Bouton 
textebouton="Mix’it"
/>

<p class=" font-plus-jakarta-sans font-normal textresponsive textpadding text-center text-legende mb-14 mt-5">Juin 2022 - 2 jours </p>

<Bouton 
textebouton="Electro Paradise"
/>

<p class=" font-plus-jakarta-sans font-normal textresponsive textpadding text-center text-legende mb-14 mt-5">Aout 2023 - 4 jours </p>

 <h3 class="  font-plus-jakarta-sans  p-8 text-center textresponsive textpadding  text-white"> Rester actif pour suivre les prochaines nouveautés qui arrivent au fur et à mesure de l’années..   </h3>


<Footer/>
</div>

</main>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Footer from "../components/Footer.vue"
import HeaderPage from "../components/HeaderPage.vue"
import TitreOnde from "../components/TitreOnde.vue"
import Bouton from "../components/Bouton.vue"
import TitrePage from "../components/TitrePage.vue"
import FlecheDown from "../components/icons/FlecheDown.vue"
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


export default {
       data(){
        return{
            listdrum:[],
            
            
        }
    },

      mounted(){
      this.getdrum();
    },

methods:{
    async getdrum(){
        // Obtenir Firestore
        const firestore = getFirestore();
        
        // Base de données (collection) document concert
        const dbdrum = collection(firestore, "drumbass");

        // Obtenir tous les documents de la collection drum
        // await pour attendre l'obtention des résultats
        const query = await getDocs(dbdrum);
        query.forEach((doc) => {
            let drumbass = {
                id : doc.id,
                txt : doc.data().txt,
                titre : doc.data().titre,
                url : doc.data().url
            }
            this.listdrum.push(drumbass);
        });
    }
},


  components: {Footer,HeaderPage,TitreOnde,Bouton,TitrePage,FlecheDown }

  

};
</script>

<template>

<HeaderAccueil/>


<main>
<div class=" flex justify-center  ">
  <img class=" lg:w-60 lg:h-auto xl:w-72 xl:h-auto" src="../../public/images/logo.svg" alt=" logo">
</div>
 <h2 class="  font-plus-jakarta-sans  font-semibold p-8 text-center textresponsive textpadding ">N’attendez plus et rejoignez-nous pour vivre un moment <span >palpitant </span> et <span>inoubliable</span>  </h2>

<div class="flex items-center lg:gap-28 md:gap-14 sm:gap-7 xl:gap-60  ">
  <img class=" w-full h-full xl:max-w-[400px] xl:max-h[400px] mr-auto" src="../../public/images/bouton_accueil2.webp" alt=" dj">

  <div class="-mb-10 ml-auto mr-auto ">
  <Bouton
  textebouton="Découvrir"
  
  />
</div>

<img class="w-full h-full  xl:max-w-[400px] xl:max-h[400px] ml-auto  " src="../../public/images/bouton_accueil1.webp" alt=" dj">
</div>
<section class=" bg-fond-gris -mt-3 ">

<div class=" pt-10 ">
  <img class="w-full max-h-auto" src="../../public/images/festival_accueil.webp" alt=" photo festival">
</div>

<FlecheDown/>

<PresentationAccueil
image="../../public/images/affiche_accueil1.webp"
TitrePartie="Découvrez tous nos concerts !"
DescriptionPartie="Retrouvez la liste de tous nos concerts disponible cette année et plongez au coeur de celui qui vous correspond le mieux !"
TextePartie1="Plus de 10 concerts"
TextePartie2="disponibles cet été !"

/>
<FlecheDown/>

<PresentationAccueil
image="../../public/images/affiche_accueil2.webp"
TitrePartie="Rencontrez vos artistes préférés !"
DescriptionPartie="Retrouvez la liste de tous nos artistes présents lors des concerts et choisissez le meilleur concert pour vous selon cette liste !"
TextePartie1="Plus de 10 artistes dont "
TextePartie2="2 renommées meilleures DJ en France"

/>

<FlecheDown/>

<PresentationAccueil
image="../../public/images/affiche_accueil3.webp"
TitrePartie="À propos du festival"
DescriptionPartie="Venez à l’encontre de notre festival et plongez au coeur d’une aventure paliptante et sensationnelle."
TextePartie1="Plus de 15 000 visiteurs "
TextePartie2=" à chaque concerts !"
/>

<FlecheDown/>

<div class="textpadding  ">
  <div class=" bg-red-900  rounded-xl -mt-5 relative z-10 ">
  <img class="w-3/5 md:w-2/5 lg:w-2/5 xl:h-1/5 mx-auto my-auto" src="../../public/images/reseaux.webp" alt="affiche reseaux sociaux">
  
   
  </div>

<div class="-mt-10 relative z-20 ">
  <Bouton
  textebouton="Nous contacter"
  
  />
  </div>
</div>


<Footer/>
</section>

</main>

</template>


<script>
import { RouterLink, RouterView } from "vue-router";
import HeaderAccueil from "../components/HeaderAccueil.vue"
import Bouton from "../components/Bouton.vue"
import FlecheDown from "../components/icons/FlecheDown.vue"
import PresentationAccueil from "../components/PresentationAccueil.vue"
import Footer from "../components/Footer.vue"



export default {
 
  components: {HeaderAccueil, Bouton, FlecheDown, PresentationAccueil, Footer }
  

};

</script>


<template>

<header class="mb-2">

    <HeaderPage
        LienSuivant="/"
    BackLien="javascript:history.back()"
    PageAvant="Retour"
    PageApres="Accueil"
    ImageHeader="/images/Home.svg"/>
</header>
<main>

  <div class=" bg-gradient-to-t from-fond-gris to-transparent pb-24"></div>

<div class=" bg-fond-gris">
<TitreOnde
Titre="Hard’Style"/>
<div class=" flex justify-center mx-auto my-auto ">
<img  src="../../public/images/festival_img.webp" alt="">
</div>


 <p class="  font-plus-jakarta-sans  font-semibold p-8 text-center textresponsive textpadding text-white  ">Le concert <span >Hard’Style </span> à l’honneur de vous accueillir, voici quelques informations à propos du concert.  </p>

<FlecheRouge/>

 <p class="  font-plus-jakarta-sans  font-light p-8 text-center textresponsive textpadding text-white  ">Rendez-vous aux portes de notre scène, la <span >Place Arena </span>à Lyon </p>


<FlecheRouge
/>

<h2 class=" font-poppins font-semibold text-white text-center mt-7 text-10xl md:text-11xl lg:text-14xl xl:text-16xl textpadding mb-7 effet-shadowblanc ">Déroulement du concert</h2>

 <p class="  font-plus-jakarta-sans  font-light p-8 pb-1 text-center textresponsive textpadding text-white  ">→  <span >Rue Claude Monet </span>à Lyon, 69150  </p>
 <p class="  font-plus-jakarta-sans  font-light p-8 text-center textresponsive textpadding text-white  ">→ Possibilité de se garer à 5 min à l’entrée du parc Clément </p>



<FlecheRouge
/>

 <p class="  font-plus-jakarta-sans  font-light p-8 pb-1 text-center textresponsive textpadding text-white  ">→ Le week-end du  <span >7 </span> et <span >8 </span>mai 2022  </p>
 <p class="  font-plus-jakarta-sans  font-light p-8 text-center textresponsive textpadding text-white  ">→ Le concert commence à <span> 17h le samedi</span> et se termine à <span> 14h le dimanche</span> </p>
<h2 class=" font-poppins font-semibold text-white text-center mt-7 text-10xl md:text-11xl lg:text-14xl xl:text-16xl textpadding mb-7 effet-shadowblanc ">Déroulement du concert</h2>


<div class=" grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(285px,1fr))]">

<div class=" p-5">
  <img src="../../public/images/img_festival1.webp" alt="image artiste">
</div>

<div class=" p-5">
  <img src="../../public/images/img_festival2.webp" alt="image artiste">
</div>

<div class=" p-5">
    <img src="../../public/images/img_festival3.webp" alt="image artiste">
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
import TitreOnde from "../components/TitreOnde.vue"
import PresentationArtiste from "../components/PresentationArtiste.vue"
import FlecheRouge from "../components/icons/FlecheRouge.vue"


export default {
 
  components: {Footer, HeaderPage,TitreOnde,PresentationArtiste,FlecheRouge }
  

};
</script>

<template>
 <header class="mb-16">
   <HeaderPage
    LienSuivant="/programmation"
    LienAvant="/Festival"
    PageAvant="Programmation"
    PageApres="Les Artistes"
    ImageHeader="/images/Fleche.svg"/>
 </header>

<main>
<TitrePage
Titre="Le Festival"/>

<img class="w-screen mt-5" src="../../public/images/festival_intro.webp" alt="artiste image intro">
<div class=" bg-fond-gris -mt-7 pt-20">


<h2 class=" font-poppins font-semibold text-white text-center mt-7 text-10xl md:text-11xl lg:text-14xl xl:text-16xl textpadding mb-7 ">Le festival</h2>

<p class=" font-plus-jakarta-sans font-normal textresponsive textpadding text-center text-legende mb-20">Découvrez ici l’histoire de notre festival qui abrite maintenant des centaines de milliers de visiteurs par an !</p>


<FlecheDown/>

 <h2 class="  font-plus-jakarta-sans  font-semibold text-center textresponsive textpadding text-white ">Notre festival se concentre principalement sur le <span >drum and bass </span> mais aussi sur <span> l’éléctro !</span>  </h2>


<img class=" mx-auto my-auto p-14 w-full max-w-[250px]" src="../../public/images/icondj.svg" alt="icon dj">

<FlecheDown/>

 <h2 class="  font-plus-jakarta-sans  font-semibold text-center textresponsive textpadding text-white ">Plus de <span >15 000 </span>visiteurs à chaque concert ! </h2>

<img class=" mx-auto my-auto p-14 w-full max-w-[250px]" src="../../public/images/People.svg" alt=" personne">


<FlecheDown/>

 <h2 class="  font-plus-jakarta-sans  font-semibold text-center textresponsive textpadding text-white ">Prenez votre place pour <span >85€ </span>, et profitez également de <span>  deux consommations offertes</span> </h2>
<img class=" mx-auto my-auto p-14 w-full max-w-[250px]" src="../../public/images/Ticket.svg" alt="ticket">

<FlecheDown/>

 <h2 class="  font-plus-jakarta-sans  font-semibold text-center textresponsive textpadding text-white ">Le festival peut accueillir des personnes âgées minimums de<span>  16 ans.</span> </h2>
<img class=" mx-auto my-auto p-14 w-full max-w-[250px]" src="../../public/images/icon_16.svg" alt="age 16 ans">


<FlecheDown/>

 <h3 class="  font-plus-jakarta-sans  font-semibold text-center textresponsive textpadding text-white ">Découvrez ci-dessous quelques photos de notre festival</h3>


<div class="  grid lg:grid-cols-3 md:grid-cols-3 place-items-stretch place-self-center ">

<div>
 <img class="mx-auto my-auto" src="../../public/images/festival_img1.webp" alt=" festival image ">
</div>

<div>
 <img class="mx-auto my-auto" src="../../public/images/festival_img2.webp" alt=" festival image ">
</div>

<div>
 <img class="mx-auto my-auto" src="../../public/images/festival_img3.webp" alt=" festival image ">
</div>

<div>
 <img class="mx-auto my-auto" src="../../public/images/festival_img4.webp" alt=" festival image ">
</div>

<div>
 <img class="mx-auto my-auto" src="../../public/images/festival_img5.webp" alt=" festival image ">
</div>

<div>
 <img class="mx-auto my-auto" src="../../public/images/festival_img6.webp" alt=" festival image ">
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




export default {
 
  components: {Footer, HeaderPage,TitrePage,FlecheDown, }
  

};
</script>


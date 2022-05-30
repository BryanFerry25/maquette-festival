<template>

<Header/>


<main>
<div class=" flex justify-center  ">
  <img class=" lg:w-60 lg:h-auto xl:w-72 xl:h-auto" src="../../public/images/logo.svg" alt=" logo">
</div>
 <h2 class="  font-plus-jakarta-sans  font-semibold p-8 text-center textresponsive textpadding ">N’attendez plus et rejoignez-nous pour vivre un moment <span >palpitant </span> et <span>inoubliable</span>  </h2>

<div class="flex items-center lg:gap-28 md:gap-14 sm:gap-7 xl:gap-60  ">
  <img class=" w-full h-full xl:max-w-[400px] xl:max-h[400px] mr-auto" src="../../public/images/bouton_accueil2.webp" alt=" dj">

  <div class="-mb-10 ml-auto mr-auto">
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

<h2 class=" font-poppins font-semibold text-white text-center mt-7 text-10xl md:text-11xl lg:text-14xl xl:text-16xl textpadding mb-7 ">Découvrez tous nos concerts !</h2>

<p class=" font-plus-jakarta-sans font-normal textresponsive textpadding text-center text-legende mb-14">Retrouvez la liste de tous nos concerts disponible cette année et plongez au coeur de celui qui vous correspond le mieux !</p>

<div class="textpadding  ">
  <img class="w-4/5 md:w-3/5 lg:w-3/5 xl:h-1/5 mx-auto my-auto" src="../../public/images/affiche_accueil1.webp" alt="affiche accueil">
  <div class=" bg-red-900  rounded-xl -mt-5 relative z-10 ">
    <h3 class=" font-plus-jakarta-sans font-medium text-7xl md:text-9xl lg:text-10xl xl:text-12xl  text-white pt-4 pb-8 text-center ">Plus de 10 concerts <br class="hiiden lg:flex xl:flex"> disponibles cet été !</h3>
  </div>

<div class="-mt-10 relative z-20 ">
  <Bouton
  textebouton="Découvrir"
  />
  </div>
</div>
<br>
<br>
<br>
<br>
<br>
<br>

</section>

</main>

</template>


<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "../components/HeaderAccueil.vue"
import Bouton from "../components/Bouton.vue"
import FlecheDown from "../components/icons/FlecheDown.vue"



export default {
 
  components: {Header, Bouton, FlecheDown }
  

};

</script>


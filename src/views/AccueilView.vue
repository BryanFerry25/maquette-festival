<template>

<Header/>


<main>
<div class=" flex justify-center  ">
  <img class=" lg:w-60 lg:h-auto xl:w-72 xl:h-auto" src="../../public/images/logo.svg" alt=" logo">
</div>
 <h2 class="  font-plus-jakarta-sans  font-semibold p-8 text-center textresponsive textpadding ">N’attendez plus et rejoignez-nous pour vivre un moment <span >palpitant </span> et <span>inoubliable</span>  </h2>

<div class="flex items-center lg:gap-28 md:gap-14 sm:gap-7 xl:gap-80  ">
  <img class=" w-full h-full" src="../../public/images/bouton_accueil2.webp" alt=" dj">

  <div class="-mb-10">
<Bouton
textebouton="Découvrir"/>
</div>

<img class="w-full h-full " src="../../public/images/bouton_accueil1.webp" alt=" dj">
</div>
<section class=" bg-fond-gris -mt-3 ">





</section>

</main>

</template>


<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "../components/HeaderAccueil.vue"
import Bouton from "../components/Bouton.vue"



export default {
 
  components: {Header, Bouton }
  

};

</script>


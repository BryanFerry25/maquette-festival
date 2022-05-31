<template>
 <header class="mb-16">
   <HeaderPage
    LienSuivant="/programmation"
    LienAvant="/Festival"
    PageAvant="Programmation"
    PageApres="Les Artistes"
    image="../../public/images/Fleche.svg"/>
 </header>

<main>
<TitrePage
Titre="Le Festival"/>

<img class="w-screen mt-5" src="../../public/images/festival_intro.webp" alt="artiste image intro">
<div class=" bg-fond-gris -mt-7 pt-20">

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


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




<FlecheRouge/>


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

<template>

<HeaderPage
 LienSuivant="/"
    LienAvant="/"
    PageAvant="Artistes"
    PageApres="Le festival"
    image="../../public/images/Fleche.svg"/>

</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Footer from "../components/Footer.vue"
import HeaderPage from "../components/HeaderPage.vue"


export default {
 
  components: {Footer,HeaderPage }
  

};
</script>

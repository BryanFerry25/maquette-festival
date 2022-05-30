<template>
<header class="mb-10">
<HeaderPage
 LienSuivant="/"
    LienAvant="/"
    PageAvant="Artistes"
    PageApres="Le festival"
    image="../../public/images/Fleche.svg"/>
</header>

<main>
    <div class="w-40 mx-auto ">
    <h1 class="font-poppins font-medium text-center uppercase text-9xl drop-shadow-lg animate-pulse ease-in-out duration-700    ">
        Programmation
    </h1>
    <div class="  bg-red-800 h-1 text-red-800  "> </div>
    </div>
</main>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Footer from "../components/Footer.vue"
import HeaderPage from "../components/HeaderPage.vue"


export default {
 
  components: {Footer,HeaderPage }
  

};
</script>

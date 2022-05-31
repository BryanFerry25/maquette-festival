<template>

<header class="mb-10">
<HeaderPage
 LienSuivant="/Festival"
    LienAvant="/programmation"
    PageAvant="Programmation"
    PageApres="Le festival"
    ImageHeader="/images/Fleche.svg"/>
</header>
<main>
<TitrePage
Titre="Les Artistes"/>

<img class="w-screen mt-12" src="../../public/images/artiste_intro.webp" alt="artiste image intro">
<div class=" bg-fond-gris -mt-7 pt-20">


<h2 class=" font-poppins font-semibold text-white text-center mt-7 text-10xl md:text-11xl lg:text-14xl xl:text-16xl textpadding mb-7 ">Nos différents 
Artistes</h2>

<p class=" font-plus-jakarta-sans font-normal textresponsive textpadding text-center text-legende mb-20">Vous pouvez retrouver ici tous les différents artistes qui seront présents pendant ces 2 prochaines années.</p>


<FlecheDown/>


<div class=" my-32">
<TitreOnde
Titre="Les DJ"/>
</div>

<div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(285px,1fr))]">

  <div class=" ml-7">
<PresentationArtiste
etoile1="#FBBF24"
etoile2="#FBBF24"
etoile3="#FBBF24"
etoile4="#FFFFFF"
etoile5="#FFFFFF"
ImageArtiste="/images/artiste1.webp"
textebouton="Tony Flapper"
lien="/ArtistePage"/>
</div>


<div class=" ml-7">
<PresentationArtiste
etoile1="#FBBF24"
etoile2="#FBBF24"
etoile3="#FBBF24"
etoile4="#FBBF24"
etoile5="#FFFFFF"
ImageArtiste="/images/artiste2.webp"
textebouton="Dimitri Kil"/>
</div>

<div class=" ml-7">
<PresentationArtiste
etoile1="#FBBF24"
etoile2="#FBBF24"
etoile3="#FBBF24"
etoile4="#FBBF24"
etoile5="#FBBF24"
ImageArtiste="/images/artiste3.webp"
textebouton="Dasilva Fulo"/>


</div>

<div class=" ml-7">
<PresentationArtiste
etoile1="#FBBF24"
etoile2="#FBBF24"
etoile3="#FBBF24"
etoile4="#FFFFFF"
etoile5="#FFFFFF"
ImageArtiste="/images/artiste4.webp"
textebouton="Anthony Diry"/>
</div>

</div>

<div class=" my-32">
<TitreOnde
Titre="Les producteurs"/>
</div>


<div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(285px,1fr))]">

  <div class=" ml-7">
<PresentationArtiste
etoile1="#FBBF24"
etoile2="#FBBF24"
etoile3="#FBBF24"
etoile4="#FFFFFF"
etoile5="#FFFFFF"
ImageArtiste="/images/artiste5.webp"
textebouton="Milano Kat"/>
</div>


<div class=" ml-7">
<PresentationArtiste
etoile1="#FBBF24"
etoile2="#FBBF24"
etoile3="#FBBF24"
etoile4="#FBBF24"
etoile5="#FFFFFF"
ImageArtiste="/images/artiste6.webp"
textebouton="Baptiste Tablier"/>
</div>

<div class=" ml-7">
<PresentationArtiste
etoile1="#FBBF24"
etoile2="#FBBF24"
etoile3="#FBBF24"
etoile4="#FBBF24"
etoile5="#FBBF24"
ImageArtiste="/images/artiste7.webp"
textebouton="Hugo Lobado"/>


</div>

<div class=" ml-7">
<PresentationArtiste
etoile1="#FBBF24"
etoile2="#FFFFFF"
etoile3="#FFFFFF"
etoile4="#FFFFFF"
etoile5="#FFFFFF"
ImageArtiste="/images/artiste8.webp"
textebouton="Coumba Surez"/>
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
import TitreOnde from "../components/TitreOnde.vue"
import PresentationArtiste from "../components/PresentationArtiste.vue"



export default {
 
  components: {Footer, HeaderPage,TitrePage,FlecheDown,TitreOnde,PresentationArtiste }
  

};
</script>

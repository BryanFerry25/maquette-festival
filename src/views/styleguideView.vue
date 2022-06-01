<template>
    <h1 class=" text-center font-poppins   mt-10 bg-red-700 p-16 font-semibold text-9xl">Guide de style</h1>

    <section class="my-6">
        <h2 class=" p-7 font-poppins text-5xl mt-10 underline">Harmonies Colorées</h2>

        <div class="flex space-x-6 mt-8 ml-16">
            <div class="flex flex-col-reverse bg-fond-gris w-20 h-24 rounded-xl">
                <p class="bg-gray-200 rounded-b-lg pb-3 text-center">#1C1917</p>
            </div>
            <div class="flex flex-col-reverse bg-red-900 w-20 h-24 rounded-xl">
                <p class="bg-gray-200 rounded-b-lg pb-3 text-center">#7F1D1D</p>
            </div>
            <div class="flex flex-col-reverse bg-fond w-20 h-24 rounded-xl border-gray-400 border-2">
                <p class="bg-gray-200 rounded-b-lg pb-3 text-center ">#FFFFFF</p>
            </div>
            <div class="flex flex-col-reverse bg-red-600 w-20 h-24 rounded-xl">
                <p class="bg-gray-200 rounded-b-lg pb-3 text-center">#DC2626 </p>
            </div>
            <div class="flex flex-col-reverse bg-red-700 w-20 h-24 rounded-xl">
                <p class="bg-gray-200 rounded-b-lg pb-3 text-center">#B91C1C</p>
            </div>
        </div>
    </section>
    <section class="my-6">
        <h2 class="p-7 font-poppins text-5xl mt-10 underline">Typographie</h2>

        <div class="flex  p-6">
            <div>
                <p class=" font-poppins font-medium text-center uppercase text-9xl md:text-10xl lg:text-13xl xl:text-15xl drop-shadow-lg"> h1 / headline 1</p>
                <p class="ml-24 text-gray-500 font-poppins"> Poppins Medium</p>
                <p class="ml-24 text-gray-500">  Texte 9XL</p>
            </div>
            <p class=" font-poppins font-medium text-center uppercase drop-shadow-lg ml-20 mt-10 text-9xl" >The quick brown fox jum...</p>
        </div>
        <div class="flex p-6">
            <div>
                <p class=" font-poppins font-semibold  mt-7 text-10xl md:text-11xl lg:text-14xl xl:text-16xl mb-7"> h2 / headline 2</p>
                <p class="ml-24 text-gray-500"> Poppins SemiBold</p>
                <p class="ml-24 text-gray-500"> Texte 10XL</p>
            </div>
            <p class="font-poppins font-semibold  text-10xl ml-20 mt-10" >The quick brown fox jumps over the laz...</p>
        </div>
        <div class="flex p-6">
            <div>
                <p class="font-plus-jakarta-sans  font-semibold p-8 textresponsive ml-24 mt-6">Body</p>
                <p class="ml-24 text-gray-500"> Plus Jakarta Sans</p>
                <p class="ml-24 text-gray-500"> Texte 16px </p>
            </div>
            <p class="font-plus-jakarta-sans  font-semibold  ml-20 mt-24" >The quick brown fox jumps over the laz...</p>
        </div>
    </section>
    <section class="my-6 bg-red-600 pb-9">
        <h2 class="p-7 font-poppins text-5xl mt-10 underline">Mes icônes</h2>
        <div class="flex gap-6 ml-20 my-4 ">
            <Check class="w-10 h-10"/>
            <Eclair class="w-10 h-10"/>
            
            <IconFestival class="w-10 h-10 "/>
            <IconMessage class="w-10 h-10"/>
            <LogoArtiste class="w-10 h-10"/>
            <LogoCalendrier class="w-10 h-10"/>
            <Musique class="w-10 h-10"/>
            <User class="w-10 h-10"/>
            <WebSite class="w-10 h-10"/>
        </div>
    </section>
    <section class="py-6 bg-gray-500">
        <h2 class="p-7 font-poppins text-5xl mt-10 underline">Composants</h2>    
        <div class=" ml-20 mt-6">

            <Bouton
            textebouton="Découvrir"
            :lien="url"/>

            <TitreOnde
Titre="Nom Artiste" />

<TitrePage
Titre="Titre de la page"/>


<div class="w-1/2 mx-auto my-auto">
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

 <PresentationAccueil 
image="/images/affiche_accueil1.webp"
TitrePartie="Découvrez tous nos concerts !"
DescriptionPartie="Retrouvez la liste de tous nos concerts disponible cette année et plongez au coeur de celui qui vous correspond le mieux !"
TextePartie1="Plus de 10 concerts"
TextePartie2="disponibles cet été !"
url="/programmation"

/>  

<div class=" bg-white">
<h2 class="p-7 font-poppins text-5xl mt-10 underline"> Les deux différents header ainsi que le footer</h2>

<HeaderAccueil
 />

   <HeaderPage
    LienSuivant="/programmation"
    LienAvant="/Festival"
    PageAvant="Programmation"
    PageApres="Les Artistes"
    ImageHeader="/images/Fleche.svg"/>

       <Footer/>   
        </div>

        </div>
    </section>
</template>

<script>
import Check from "../components/icons/Check.vue"
import Eclair from "../components/icons/Eclair.vue"
import FlecheDown from "../components/icons/FlecheDown.vue"
import IconFestival from "../components/icons/IconFestival.vue"
import IconMessage from "../components/icons/IconMessage.vue"
import LogoArtiste from "../components/icons/LogoArtiste.vue"
import LogoCalendrier from "../components/icons/LogoCalendrier.vue"
import Musique from "../components/icons/Musique.vue"
import User from "../components/icons/User.vue"
import WebSite from "../components/icons/WebSite.vue"


import Bouton from "../components/Bouton.vue"
import TitreOnde from "../components/TitreOnde.vue"
import TitrePage from "../components/TitrePage.vue"
import PresentationArtiste from "../components/PresentationArtiste.vue"
import PresentationAccueil from "../components/PresentationAccueil.vue"
import HeaderAccueil from "../components/HeaderAccueil.vue"
import HeaderPage from "../components/HeaderPage.vue"
import Footer from "../components/Footer.vue"


export default {
  name: "App",
  components: { Check,Eclair,FlecheDown,IconFestival,IconMessage,LogoArtiste,LogoCalendrier,Musique,User,WebSite,
   Bouton,TitreOnde,TitrePage,PresentationArtiste,PresentationAccueil,HeaderAccueil,HeaderPage,Footer },
};

</script>
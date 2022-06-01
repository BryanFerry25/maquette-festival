<template>
    <div class="mb-20 lg:mb-36 xl:mb-44">
<h2 class=" font-poppins font-semibold text-white text-center mt-7 text-10xl md:text-11xl lg:text-14xl xl:text-16xl textpadding mb-7 effet-shadowblanc ">{{TitrePartie}}</h2>

<p class=" font-plus-jakarta-sans font-normal textresponsive textpadding text-center text-legende mb-14">{{DescriptionPartie}}</p>

<div class="textpadding  ">
  <img class="w-4/5 md:w-3/5 lg:w-3/5 xl:h-1/5 mx-auto my-auto" :src="image" alt="affiche accueil">
  <div class=" bg-red-900  rounded-xl -mt-5 relative z-10 ">
    <h3 class=" font-plus-jakarta-sans font-medium text-7xl md:text-9xl lg:text-10xl xl:text-12xl  text-white pt-4 pb-8 text-center ">{{TextePartie1}} <br class="hiiden lg:flex xl:flex"> {{TextePartie2}}</h3>
  </div>

<div class="-mt-10 relative z-20 ">
  <Bouton
  textebouton="En savoir plus"
  :lien="url"

 

  
  />
  </div>


</div>
</div>
</template>


<script>
import Bouton from "./Bouton.vue"



export default {
    props: {
      TitrePartie:{
      type: String,
      default:"Titre de la partie"

    },
      DescriptionPartie:{
      type: String,
      default:"Voici une courte description de la partie que vous retrouvez juste en dessous"

    },
      image:{
      type: String,
      default:"../../public/images/affiche_accueil1.webp"

    },
      TextePartie1:{
      type: String,
      default:"Première partie du texte"

    },
      TextePartie2:{
      type: String,
      default:"Deuxièmes parties du texte"

    },
      url:{
      type: String,
      default:"/"

    },



},
components: { Bouton } 
}
</script>


<template>

<img class="w-2/5 md:w-2/5 lg:w-2/5 xl:h-1/5 mx-auto my-auto" src="../../public/images/artiste1.webp" alt="affiche artiste">


<div class="-mt-10 relative z-20 ">
  <Bouton
  textebouton="Tony Flapper"
  
  />

<Stars/>


</div>


  








</template>

<script>
import Bouton from "./Bouton.vue"
import Stars from "./icons/Stars.vue"

export default {

components: { Bouton, Stars } 
}
</script>
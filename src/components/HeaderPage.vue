<template>
    <div class="flex items-center px-3 pt-2  ">



    <RouterLink :to="LienAvant">
    <div class="flex items-center gap-2   ">

    <img class="rotate-180  mr-auto w-5 " src="../../public/images/Fleche.svg" alt=" fleche">
    <p class=" font-plus-jakarta-sans text-sm md:text-lg lg:text-2xl lg:p-5 xl:text-5xl">{{PageAvant}}</p>
    
    </div>
    </RouterLink>


<div class=" ml-auto mr-auto flex justify-center ">
      <img class="w-2/5 md:w-2/5 lg:w-3/5 xl:w-4/5" src="../../public/images/logo.svg" alt="logo">
</div>

    <RouterLink :to="LienSuivant">
    <div class="flex items-center gap-2   ">

   
    <p class=" font-plus-jakarta-sans text-sm md:text-lg lg:text-2xl lg:p-5 xl:text-5xl">{{PageApres}}</p>
     <img class="  w-5  " :src="image" alt=" fleche ou maison">
    
    </div>
    </RouterLink>

</div>


</template>

<script>
export default {
    props: {

      LienSuivant:{
      type: String,
      default:"/"
    },
    LienAvant:{
      type: String,
      default:"/"
    },
    PageAvant:{
      type: String,
      default:"artistes"
    },
    PageApres:{
      type: String,
      default:"festival"
    },
    image:{
      type: String,
      default:"../../public/images/Fleche.svg"
    },
    

},
}
</script>

<template>
<div class="flex items-center  ">
<img class="  mr-auto  max-w-[100px] md:max-w-[200px] lg:max-w-[250px] xl:max-w-[350px]  max-h-[100px]  md:max-h-[200px] lg:max-h-[250px] xl:max-h-[350px]" src="../../public/images/onde_titre1.webp" alt=" onde de son rouge">

    <h2 class=" font-poppins font-semibold text-white text-center mt-7 text-7xl md:text-11xl lg:text-14xl xl:text-16xl mb-7 mr-auto ml-auto ">{{Titre}}</h2>

<img class=" ml-auto  max-w-[100px] md:max-w-[200px] lg:max-w-[250px] xl:max-w-[350px]  max-h-[100px]  md:max-h-[200px] lg:max-h-[250px] xl:max-h-[350px] " src="../../public/images/onde_titre2.webp" alt=" onde de son rouge">
</div>
</template>

<script>
export default {
    props: {
      Titre:{
      type: String,
      default:"Nom musique"

    },
},
}
</script>

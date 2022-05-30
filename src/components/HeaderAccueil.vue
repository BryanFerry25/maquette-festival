<template>
    



 <div class=" flex justify-end items-center pr-3 pt-5 pb-6 ">
    <div class=" flex font-plus-jakarta-sans text-sm md:text-lg lg:text-2xl gap-3 lg:p-5 xl:text-5xl xl:pr-10  ">

        <p>Artistes</p>

        <div class=" pt-1">
        <LogoArtiste class="md:w-5 md:h-4 lg:w-7 lg:h-6 "/>
        </div>

        <p class="font-plus-jakarta-sans"> |</p>

        <p>Programmation</p>

        <div class=" pt-1 ">
        <LogoCalendrier class="md:w-5 md:h-5 lg:w-6 lg:h-6"/>
        </div>
    </div>
</div>


<div>
    <img src="../../public/images/vague.webp" alt=" vague"  class=" w-screen max-h-16">
</div>
</template>

<script>
import LogoArtiste from "./icons/LogoArtiste.vue"
import LogoCalendrier from "./icons/LogoCalendrier.vue"


export default {
   components: { LogoArtiste, LogoCalendrier } 
}
</script>
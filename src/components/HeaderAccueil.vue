<template>
    



 <div class=" flex justify-end items-center pr-3 pt-5 pb-6 ">
    <div class=" flex font-plus-jakarta-sans text-sm md:text-lg lg:text-2xl gap-3 xl:gap-4 lg:p-5 xl:text-5xl xl:pr-10  ">


 <RouterLink to="../views/Login"  class="flex font-plus-jakarta-sans text-sm md:text-lg lg:text-2xl gap-3 xl:gap-4 lg:p-5 xl:text-5xl lg:-mr-5 hover:-translate-y-2 delay-100 ease-out transition-transform "> 


        <div class=" pt-1">
        <IconConex class="w-4 h-4 md:w-4 md:h-4 lg:w-6 lg:h-6 "/>
        </div>
 </RouterLink>

        <p class="font-plus-jakarta-sans text-sm md:text-lg lg:text-2xl xl:gap-3 lg:p-5 xl:text-5xl lg:-mr-5  "> |</p>

 <RouterLink to="../views/Artistes"  class="flex font-plus-jakarta-sans text-sm md:text-lg lg:text-2xl gap-3 xl:gap-4 lg:p-5 xl:text-5xl lg:-mr-5 hover:-translate-y-2 delay-100 ease-out transition-transform "> 
        <p>Artistes</p>

        <div class=" pt-1">
        <LogoArtiste class="md:w-5 md:h-4 lg:w-7 lg:h-6 "/>
        </div>
 </RouterLink>

        <p class="font-plus-jakarta-sans text-sm md:text-lg lg:text-2xl xl:gap-3 lg:p-5 xl:text-5xl lg:-mr-5  "> |</p>

<RouterLink to="../views/programmation"  class="flex font-plus-jakarta-sans text-sm md:text-lg lg:text-2xl gap-3 xl:gap-3 lg:p-5 xl:text-5xl hover:-translate-y-2  delay-100 ease-out transition-transform  "  >
        <p>Programmation</p>

        <div class=" pt-1 ">
        <LogoCalendrier class="md:w-5 md:h-5 lg:w-6 lg:h-6"/>
        </div>
</RouterLink>


  <p class="font-plus-jakarta-sans hidden xl:flex lg:flex xl:mt-5 lg:mt-5 "> |</p>
<RouterLink to="../views/Festival" class="font-plus-jakarta-sans text-sm md:text-lg lg:text-2xl xl:gap-4 lg:gap-4 lg:p-5 xl:text-5xl xl:pr-10 hidden xl:flex lg:flex hover:-translate-y-2  delay-100 ease-out transition-transform " href="">

        <p class="hidden xl:flex lg:flex lg:text-2xl xl:text-5xl">Le festival</p>

        <div class=" pt-1 hidden xl:flex lg:flex ">
        <IconFestival class=" xl:w-6 xl:h-6 lg:w-6 lg:h-6 "/>
        </div>


</RouterLink>

<p class="font-plus-jakarta-sans hidden xl:flex xl:mt-5 "> |</p>
<RouterLink to="../views/Contact" class="font-plus-jakarta-sans text-sm md:text-lg lg:text-2xl xl:gap-4 lg:p-5 xl:text-5xl xl:pr-10 hidden xl:flex hover:-translate-y-2  delay-100 ease-out transition-transform" href="">

        <p class="hidden xl:flex">Nous contacter</p>

        <div class=" pt-1 hidden xl:flex ">
        <IconMessage class=" xl:w-6 xl:h-6"/>
        </div>

</RouterLink>


      
    </div>
</div>


<div>
    <img src="../../public/images/vague.webp" alt=" vague"  class=" w-screen max-h-16">
</div>
</template>

<script>
import LogoArtiste from "./icons/LogoArtiste.vue"
import LogoCalendrier from "./icons/LogoCalendrier.vue"
import IconFestival from "./icons/IconFestival.vue"
import IconMessage from "./icons/IconMessage.vue"
import IconConex from "./icons/IconConex.vue"


export default {
    
   components: { LogoArtiste, LogoCalendrier, IconFestival, IconMessage, IconConex } 
}
</script>
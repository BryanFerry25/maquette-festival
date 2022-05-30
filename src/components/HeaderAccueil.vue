<template>
    



 <div class=" flex justify-end items-center ">
    <div class=" flex font-plus-jakarta-sans sm:text-sm gap-3 ">

        <p>Artistes</p>

        <div class=" pt-1">
        <LogoArtiste/>
        </div>

        <p class="font-plus-jakarta-sans"> |</p>

        <p>Programmation</p>

        <div class=" pt-1">
        <LogoCalendrier/>
        </div>
    </div>
</div>

</template>

<script>
import LogoArtiste from "./icons/LogoArtiste.vue"
import LogoCalendrier from "./icons/LogoCalendrier.vue"


export default {
   components: { LogoArtiste, LogoCalendrier } 
}
</script>
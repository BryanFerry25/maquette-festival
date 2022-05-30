<template>
    
<a :href="lien">
<div class="flex flex-row justify-center  drop-shadow-2xl mt-7 ">
<svg
 class=" lg:w-[500px] lg:h-[80px] md:w-[450px] md:h-[75px] hover:fill-red-800"
  width="250"
  height="60"
  viewBox="0 0 294 65"
  fill="#DC2626"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  <path
    d="M267.568 0H24.5679C3.36758 3.6 -0.598926 24.5 0.0678516 34.5C-1.13215 55.7 15.9012 63.6667 24.5679 65H267.568C288.768 64.2 293.401 41 293.068 29.5C292.268 6.3 275.734 0.166667 267.568 0Z"
  ></path>
</svg>
  <p class=" text-2xl flex-grow-0 flex-shrink-0 font-plus-jakarta-sans font-semibold text-left drop-shadow-sm absolute text-white mt-3.5 md:mt-4 md:text-4xl lg:mt-5 lg:text-6xl  ">{{textebouton}}</p>
</div>

</a>
</template>

<script>
export default {
    props: {
         textebouton: {type: String,
       
        },

},
}
</script>

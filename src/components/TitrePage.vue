<template>
    


        <div class="flex justify-center items-center gap-2.5">
  <div
    class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-[8px] drop-shadow-xl "
  >                                                                                 
    <p class="flex-grow-0 flex-shrink-0 font-poppins font-medium text-center uppercase text-9xl md:text-10xl lg:text-13xl xl:text-15xl drop-shadow-lg animate-pulse ease-in-out duration-700 ">
      {{Titre}}
    </p>
    <svg
   
      width="140"
      height="2"
      viewBox="0 0 159 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="flex-grow-0 flex-shrink-0 md:w-[150px] lg:w-[160px] xl:w-[170px] "
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="1" x2="159" y2="1" stroke="#DC2626" stroke-width="2"></line>
    </svg>
  </div>
</div>


</template>


<script>
export default {
    props: {

      Titre:{
      type: String,
      default:"Inpulse's"
    },
}}
</script>

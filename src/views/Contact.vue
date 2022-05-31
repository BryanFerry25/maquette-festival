<template>

 <header class="mb-16">
   <HeaderPage
    LienSuivant="/Festival"
    LienAvant="/programmation"
    PageAvant="Programmation"
    PageApres="Le festival"
    ImageHeader="/images/Fleche.svg"/>
 </header>


<main>
  
<TitrePage
Titre="Contact"/>

<img class="w-screen mt-12 scale-50 max-h-96 max-w-[800px] mx-auto my-auto" src="../../public/images/reseaux.webp" alt="logo reseaux sociaux">

<div class=" bg-fond-gris -mt-20 md:-mt-36 lg:-mt-44 pt-20">

<h2 class=" font-poppins font-semibold text-white text-center mt-7 text-10xl md:text-11xl lg:text-14xl xl:text-16xl textpadding mb-7 ">Une question ?</h2>


    <div class=" flex justify-center p-4">
          <div class="box-border rounded-4xl bg-legende bg-opacity-30 p-14  w-full max-w-lg shadow-lg ">


            <form method="post" action="../contact.php"  class=" font-poppins font-medium" id="form">
              <label for="fname" class="ml-0 mr-0 w-full font-poppins font-medium text-2xl text-white">VOTRE NOM </label>
              <input type="text" id="fname" name="name" placeholder="Indiquez votre nom" class="w-full pt-5 pb-5 bg-legende bg-opacity-0  mt-1.5 mb-4 mr-0 ml-0 resize-y font-poppins font-light text-xs">
          
      <svg
   
      width="140"
      height="2"
      viewBox="0 0 159 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="flex-grow-0 flex-shrink-0 md:w-[400px] md:h-[30px]  lg:w-[400px] lg:h-[30px]  xl:w-[400px] xl:h-[30px]   -mt-5 mb-10 "
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="1" x2="159" y2="1" stroke="#DC2626" stroke-width="2"
      class=" md:stroke-1 lg:stroke-1 xl:stroke-1"></line>
    </svg>


              <label for="emailAddress" class="ml-0 mr-0 w-full font-poppins font-medium text-2xl text-white">VOTRE EMAIL</label>
              <input id="emailAddress" type="email" name="email" placeholder="Indiquez votre email" required class="w-full pt-5 pb-5  mt-1.5 mb-4 mr-0 ml-0 resize-y font-poppins font-light text-xs rounded-8xl bg-legende bg-opacity-0">
      

      <svg
   
      width="140"
      height="2"
      viewBox="0 0 159 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="flex-grow-0 flex-shrink-0 md:w-[400px] md:h-[30px]  lg:w-[400px] lg:h-[30px]  xl:w-[400px] xl:h-[30px] -mt-5 mb-10 "
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="1" x2="159" y2="1" stroke="#DC2626" stroke-width="2"
      class=" md:stroke-1 lg:stroke-1 xl:stroke-1"></line>
    </svg>


          
              <label for="subject" class="ml-0 mr-0 w-full font-poppins font-medium text-2xl text-white ">VOTRE MESSAGE</label>
              <textarea id="subject" name="message" placeholder="Indiquez votre message" style="height:150px" class="w-full pt-5 pb-5  mt-1.5 mb-4 mr-0 ml-0 resize-y font-poppins font-light text-xs rounded-8xl bg-legende bg-opacity-0"></textarea>

      <svg
   
      width="140"
      height="2"
      viewBox="0 0 159 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="flex-grow-0 flex-shrink-0 md:w-[400px] md:h-[30px]  lg:w-[400px] lg:h-[30px]  xl:w-[400px] xl:h-[30px] -mt-5 mb-10 "
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="1" x2="159" y2="1" stroke="#DC2626" stroke-width="2"
      class=" md:stroke-1 lg:stroke-1 xl:stroke-1"></line>
    </svg>


              <input class="" type="checkbox" required> 
              <span class="font-poppins font-normal text-sm sm:text-xs text-white "> J’accepte les conditions d’utilisations </span>
              <div class=" text-center">
              <input type="submit" value="Envoyer" name="submit" class=" bg-red-600 text-white px-16 py-3 rounded-3xl border-none cursor-pointer shadow-lg text-lg font-poppins font-medium hover:bg-red-800 mt-10">
              </div>
            </form>
          </div>
          </div>


<h2 class=" font-poppins font-semibold text-white text-center mt-7 text-10xl md:text-11xl lg:text-14xl xl:text-16xl textpadding mb-7 ">Où nous trouver ?</h2>
 <p class="  font-plus-jakarta-sans  font-semibold text-center textresponsive textpadding text-white mb-16 ">Rendez-vous dans la zone verte, rue Claude Monet à Lyon, 69150 </p>


<div class=" sm:scale-75 md:scale-100 lg:scale-150 xl:scale-150 mx-auto my-auto flex justify-center">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.8928769041995!2d4.792258915793224!3d45.73324307910508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebe461ea1b09%3A0x58437f29832f1ae8!2sRue%20Claude%20Monet%2C%2069110%20Sainte-Foy-l%C3%A8s-Lyon!5e0!3m2!1sfr!2sfr!4v1654023730221!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</div>

<div class=" flex justify-center">

<div>
  <img src="" alt="">
</div>


</div>

</div>




</main>
 




</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Footer from "../components/Footer.vue"
import HeaderPage from "../components/HeaderPage.vue"
import TitrePage from "../components/TitrePage.vue"


export default {
 
  components: {Footer, HeaderPage, TitrePage }
  

};
</script>

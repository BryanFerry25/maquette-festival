<template>
    <div class="mt-20">


    <img class="w-screen max-h-24" src="../../public/images/vague_footer.webp" alt="vague footer">
    <div class=" bg-red-900">
            <ul class=" font-plus-jakarta-sans textresponsive text-center mr-auto ml-auto space-y-10 text-white mb-16        grid lg:grid-cols-3 md:grid-cols-3 place-items-stretch place-self-center">
            <RouterLink to="../views/programmation">    <li class=" mt-10">Programmation</li> </RouterLink>
                <RouterLink to="../views/Artistes"> <li>Artistes</li> </RouterLink>
                <RouterLink to="../views/Festival"> <li>Le festival</li> </RouterLink>
                <RouterLink to="../views/Contact"> <li>Nous contacter</li> </RouterLink>
                 <RouterLink to="../views/AccueilView"><li>Accueil</li></RouterLink>
                 <RouterLink to="../views/MentionsLegales"><li>Mentions légales</li></RouterLink>
            </ul>

            <div class=" flex space-x-8 justify-center pb-7 ">
                <a class="hover:-translate-y-2 hover:rotate-[360deg] duration-300 delay-100 ease-out transition-transform " href="https://www.instagram.com/"><img class=" w-16" src="../../public/images/Instagram.svg" alt="logo insta"></a>
                <a class="hover:-translate-y-2 hover:rotate-[360deg] duration-300 delay-100 ease-out transition-transform "  href="https://www.facebook.com/"><img class=" w-16" src="../../public/images/Twitter.svg" alt="logo twitter"></a>
               <a class="hover:-translate-y-2 hover:rotate-[360deg] duration-300 delay-100 ease-out transition-transform "  href="https://www.facebook.com/"> <img class=" w-16" src="../../public/images/Facebook.svg" alt="logo facebook"></a>
            </div>
    </div>
    </div>
</template>
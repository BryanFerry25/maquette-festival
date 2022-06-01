<template>
    <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div class="relative">
                    <div class="absolute">
                        <div class="">
                            <h1 class="my-2 text-gray-800 font-poppins font-bold text-7xl">
                                Oups.. Vous êtes au mauvais endroits !
                            </h1>
                            <p class="my-2 text-gray-800 font-poppins">Désolé cette page n'existe pas !</p>
                            <RouterLink to="/">
                            <button class="sm:w-full lg:w-auto my-2 border rounded-3xl md py-4 px-8 text-center bg-red-600 text-white hover:bg-red-00 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 font-poppins">Retourner à la page d'accueil</button>
                            </RouterLink>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                    </div>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
        </div>


        <form action="https://google.com/" method="GET" class="flex flex-col bg-Default/me/Gris p-10 my-10 bg-slate-300 rounded-2xl "
            x-data="{ q:'', }" 
            x-on:submit="q = q + ' site:inpulses.bferry.fr'">
            
            <input type="text" class="border bg-white  shadow-contact h-24 rounded-xl" placeholder="Rechercher " id="q" name="q" x-model="q">
            <button type="submit" class=" px-8 py-4 my-5 bg-red-600 text-white font-poppins rounded-3xl">Rechercher</button>
        </form>

<h2 class=" font-poppins font-semibold  text-center mt-7 text-10xl md:text-11xl lg:text-14xl xl:text-16xl textpadding mb-7 effet-shadowblanc ">Retrouver les différentes pages</h2>
<div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(285px,1fr))] p-8">

    <div>
<RouterLink to="/programmation">

<button class="sm:w-full lg:w-auto my-2 border rounded-3xl md py-4 px-8 text-center bg-red-800 text-white hover:bg-red-00 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 font-poppins">Programmation</button>

</RouterLink>
</div>

    <div>
<RouterLink to="/Artistes">

<button class="sm:w-full lg:w-auto my-2 border rounded-3xl md py-4 px-8 text-center bg-red-800 text-white hover:bg-red-00 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 font-poppins">Artistes</button>

</RouterLink>
</div>


    <div>
<RouterLink to="/Festival">

<button class="sm:w-full lg:w-auto my-2 border rounded-3xl md py-4 px-8 text-center bg-red-800 text-white hover:bg-red-00 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 font-poppins">Le festival</button>

</RouterLink>
</div>


    <div>
<RouterLink to="/Contact">

<button class="sm:w-full lg:w-auto my-2 border rounded-3xl md py-4 px-8 text-center bg-red-800 text-white hover:bg-red-00 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 font-poppins">Nous contacter</button>

</RouterLink>
</div>




</div>

</template>
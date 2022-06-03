<template>
  <div class="mt-12 px-5 flex flex-col gap-20 relative">
      <div class="flex justify-between items-end">
        <h1 class="text-4xl underline font-poppins">Liste artiste</h1>
        <RouterLink to="/create"> <div class=" bg-red-700 text-white font-poppins px-10 py-4 rounded-2xl"><p>Créer +</p></div> </RouterLink>
      </div>
      <div class="block overflow-x-auto w-full">
         
          <div class="relative float-right w-1/3">
           <p class="  font-poppins textresponsive ">Taper pour rechercher</p>
              <input type="search" class="w-full rounded-sm h-10 text-black px-4 bg-slate-200" placeholder="Recherche par nom" v-model="query">
           
          </div>

          <table class="w-full">
            <thead>
                <tr class="border-b-2">
                    <th class="w-64 p-3 font-poppins textresponsive ">Image</th>
                    <th class="w-1/5 font-poppins textresponsive ">Nom</th>
                    

                </tr>
            </thead>
            <tbody>
                <tr v-for="artistes in searchByName" :key="artistes.id" class="mt-2">
                    <td class=""><img :src="artistes.photo" :alt="artistes.nom" class="w-full h-auto"></td>
                    <td class="text-center font-poppins textresponsive ">{{artistes.nom}}</td>

                    <td class="text-center ">
                        


                        <RouterLink :to="{ name:'DeleteArtiste', params: { id: artistes.id }}">
                         <div class=" p-7 bg-red-900 text-white font-poppins px-4 py-3 rounded-2xl mb-8 ">
                    Supprimer
                        </div>
                        </RouterLink>



                    <RouterLink :to="{ name:'UpdateArtiste', params: { id: artistes.id }}">
                        <div class="bg-red-600 text-white font-poppins px-4 py-3 rounded-2xl">
                    Modifier


                    </div>
                    </RouterLink>


                    </td>
                </tr>
            </tbody>
        </table>
      </div>
  </div>
</template>

<script>
import {
    getFirestore,
    collection,
    doc,
    query,
    orderBy,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'
import { 
    getStorage,             // Obtenir le Cloud Storage
    ref,                    // Pour créer une référence à un fichier à uploader
    getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
    uploadString,           // Permet d'uploader sur le Cloud Storage une image en Base64
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js'


export default {
   
    data(){
        return{
            listart:[],
            query:'',
            
        }
    },
    mounted(){
      this.getArtiste();
    },
    methods:{
      async getArtiste(){
        const firestore = getFirestore();
          const dbArt = collection(firestore, "artistes");
          const q = query(dbArt, orderBy('nom', 'asc'));
          await onSnapshot(q, (snapshot) =>{
              this.listart = snapshot.docs.map(doc =>({
                  id:doc.id, ...doc.data()
              }))
          this.listart.forEach(function(artistes){
              const storage = getStorage();
              const spaceRef = ref(storage, 'artistes/'+artistes.photo);
              getDownloadURL(spaceRef)
              .then((url) =>{
                  artistes.photo = url;
              })
              .catch((error) =>{
                  console.log('erreur download url', error);
              })
          })
          
          })
      },
    },
    computed:{
        searchByName(){
            let query = this.query;
                return this.listart.filter(function(artistes){
                    return artistes.nom.includes(query);
            })    
        },

    }
}
</script>

<style>

</style>
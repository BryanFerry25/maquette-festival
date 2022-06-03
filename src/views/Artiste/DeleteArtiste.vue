<template>
    <div class="mt-12 px-5 flex flex-col gap-20 relative">
        <div class="flex flex-col gap-8">
            <h1 class="text-4xl underline font-poppins">Delete Artiste</h1>
            <p class="w-full text-center py-3 bg-yellow-50 text-black rounded-sm">Attention vous allez supprimer ce participant, cette action est irréversible !!</p>
        </div>
        <form @submit.prevent="deleteArtiste">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="grid place-items-center">
                    <img :src="photoActuelle" class="w-1/2">
                </div>
                <div class="grid grid-cols-1 gap-14">
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Nom</div>
                        <input class="w-full" type="text" placeholder="Nom de l'artiste" v-model="artistes.nom" disabled>
                    </div>


                </div>
            </div>
            <div class="grid grid-cols-2 w-full place-items-center">
                <button class="w-fit px-6 py-3" type="submit">Supprimer</button>
                <button class="w-fit px-6 py-3" type="button"><RouterLink to="/gestion">Annuler</RouterLink></button>
            </div>
        </form>
    </div>
</template>

<script>
import { 
    getFirestore,
    doc, 
    getDoc,
    deleteDoc
    } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'
import { 
    getStorage, 
    ref, 
    getDownloadURL,
    uploadString,
    deleteObject} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js'
export default {
    data(){
        return{
                
            artistes:{   
                nom:null,   
                photo:null, 
            },

            refArtiste:null,      
            photoActuelle:null 
        }
    },
    mounted(){
        this.getArtiste(this.$route.params.id);
    },
    methods:{

      async getArtiste(id){
          const firestore = getFirestore();
          const docRef = doc(firestore, "artistes", id);
          this.refArtiste = await getDoc(docRef);
          if(this.refArtiste.exists()){
              this.artistes = this.refArtiste.data();
              this.photoActuelle = this.artistes.photo;
          }else{
              this.console.log("artiste inexistant");
          }
          const storage = getStorage();
          const spaceRef = ref(storage, 'artistes/'+this.artistes.photo);
          getDownloadURL(spaceRef)
            .then((url)=>{
                this.photoActuelle = url;
            })
            .catch((error) => {
                console.log('erreur downloadurl', error);
            })
      },

      async deleteArtiste(){
            const firestore = getFirestore();
            await deleteDoc(doc(firestore, "artistes", this.$route.params.id));
            const storage = getStorage();
            let docRef = ref(storage, 'artistes/'+this.artistes.photo);
            deleteObject(docRef);
            this.$router.push('/gestion');       
        }
    }

}
</script>

<style>

</style>
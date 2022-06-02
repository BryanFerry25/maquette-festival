<template>
    <div class="mt-12 px-5 flex flex-col gap-20 relative">
        <div class="flex justify-between items-end">
            <h1 class="font-smythe text-2xl">Ajouter Artiste</h1>
        </div>
        <form @submit.prevent="createArtiste">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="grid place-items-center">
                    <img :src="imageData" class="w-1/2">
                </div>
                <div class="grid grid-cols-1 gap-14">
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Nom</div>
                        <input class="w-full" type="text" placeholder="Nom de l'artiste" v-model="artistes.nom" required>
                    </div>

                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Photo</div>
                        <div class="relative w-full">
                            <input type="file" class="w-full relative" ref="file" id="file" @change="previewImage">
                            <label class="absolute w-full left-0 top-0 bottom-0 bg-white flex justify-center items-center" for="file">Sélectionner l'image</label>
                        </div>
                    </div>

                </div>
            </div>
            <div class="grid grid-cols-2 w-full place-items-center">
                <button class="w-fit px-6 py-3" type="submit">Ajouter</button>
                <button class="w-fit px-6 py-3" type="button"><RouterLink to="/gestion">Annuler</RouterLink></button>
            </div>
        </form>
    </div>
</template>

<script>
import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc,
    addDoc,
    updateDoc, 
    onSnapshot, 
    query,
    orderBy
    } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'
import { 
    getStorage, 
    ref, 
    getDownloadURL,
    uploadString,
    } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js'
export default {
    data(){
        return{
            imageData:null, 
            
            artistes:{   
                nom:null,   
                photo:null, 
            },
        }
    },
    mounted(){
        
    },
    methods:{
        previewImage: function(event){
          this.file = this.$refs.file.files[0];
          this.artistes.photo = this.file.name;
          var input = event.target;
          if(input.files && input.files[0]){
              var reader = new FileReader();
              reader.onload = (e) => {
                  this.imageData = e.target.result;
              }
              reader.readAsDataURL(input.files[0]);
          }
        },

      async createArtiste(){
          const storage = getStorage();
          const refStorage = ref(storage, 'artistes/'+this.artistes.photo);
          console.log('refStorage', refStorage);
          await uploadString(refStorage, this.imageData, 'data_url').then((snapshot)=> {
              console.log('Uploaded a base64 string');
              const db = getFirestore();
              const docRef = addDoc(collection(db, 'artistes'), this.artistes );
          });
          this.$router.push('/gestion');
          this.$router.push('../Artistes');
      }
    },

}
</script>

<style>

</style>
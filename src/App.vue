<template>



      <ul v-if="isAdmin">
                <li class=" text-center pt-16 relative px-16 py-36 bg-red-800 rounded-sm flex items-center justify-center text-white administration font-poppins textresponsive font-semibold">
                  
                    <ul class="absolute mt-7">
                       <RouterLink to="/gestion"> <li class="mt-5 pt-5">  Espace Admin pour artiste  </li></RouterLink>
                        <RouterLink to="/create">  <li class="mt-5">   Création Artistes </li></RouterLink>

                        <RouterLink to="/">  <li class="mt-5 bg-red-600"> Retour à l'accueil </li></RouterLink>
                    </ul>
                </li>                
            </ul>


 <RouterView />


</template>
<script>
import router from "./router"

import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'
import {
  getStorage,
  ref,
  getDownloadURL,
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js'
import {
  getAuth,
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js'
import { emitter } from './main.js'

export default {
    data(){
        return{
            
            user:{
                email:null,
                password:null
            },
            
            name:"Account",
            
            isAdmin:false
        }
    },
    mounted(){
        this.getUserConnect();
    },
    methods:{
        async getUserConnect(){
        await getAuth().onAuthStateChanged(function(user){
            if(user){
            this.user = user;
            this.getUserInfo(this.user);
            }
        }.bind(this));


        emitter.on('connectUser', e =>{
        this.user = e.user;
        console.log('App => Reception user connecté', this.user);
        this.getUserInfo(this.user);
        })


        emitter.on('deConnectUser', e =>{
        this.user = e.user;
        console.log('App => Reception user deconnecté', this.user);
        this.userInfo = null,
        this.name = 'Account',
        this.avatar = null,
        this.isAdmin = false
        })
    },
    async getUserInfo(user){
      const firestore = getFirestore();
      const dbUsers = collection(firestore, "users");
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot)=>{
        this.userInfo = snapshot.docs.map(doc=>({
          id:doc.id, ...doc.data()
        }));
        console.log("userInfo", this.userInfo);
        this.name = this.userInfo[0].login;
        this.isAdmin = this.userInfo[0].admin;
      });
    },
    },
}
</script>
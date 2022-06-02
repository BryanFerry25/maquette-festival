import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  const firebaseConfig = {

    apiKey: "AIzaSyD0gb3AMzN8VJ1n3CoMriD0GmsB18dFyIk",

    authDomain: "inpulses-48ba9.firebaseapp.com",

    projectId: "inpulses-48ba9",

    storageBucket: "inpulses-48ba9.appspot.com",

    messagingSenderId: "394417965060",

    appId: "1:394417965060:web:8647f5e972c08846a84d51"

  };


  // Initialize Firebase

  const appFireBase = initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)

app.mount('#app')
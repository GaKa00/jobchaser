// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwKotQw19hutC50TVfsn065TLOO9MGEjU",
  authDomain: "chasichas-d67f8.firebaseapp.com",
  projectId: "chasichas-d67f8",
  storageBucket: "chasichas-d67f8.appspot.com",
  messagingSenderId: "630419610481",
  appId: "1:630419610481:web:1235fa004a1077823234d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const  auth = getAuth(app);

export{auth}

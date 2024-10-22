import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCoeFQCEkHjz1cioB8GqpRfgvfyqGZMMyE",
  authDomain: "nomadelide-mi.firebaseapp.com",
  projectId: "nomadelide-mi",
  storageBucket: "nomadelide-mi.appspot.com",
  messagingSenderId: "877452353809",
  appId: "1:877452353809:web:e866bda9e55985a66facb0",
  measurementId: "G-51VE8SHWR1"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)


export{db}

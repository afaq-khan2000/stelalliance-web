import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBYSkphAgP5r7wO6Saifu1ZFeipxjXlpYo",
  authDomain: "stelalliance-website-2422b.firebaseapp.com",
  databaseURL: "https://stelalliance-website-2422b-default-rtdb.firebaseio.com",
  projectId: "stelalliance-website-2422b",
  storageBucket: "stelalliance-website-2422b.appspot.com",
  messagingSenderId: "537010879959",
  appId: "1:537010879959:web:6647882868e2e3d9ff9f92"
};
const app = initializeApp(firebaseConfig);
export const fileDb = getStorage(app);
export const db = getFirestore(app);
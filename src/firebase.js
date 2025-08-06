// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2TtNITwDZnzxKSGahO5Pb_gnCf5GkSaA",
  authDomain: "d-nal-task-manager.firebaseapp.com",
  projectId: "d-nal-task-manager",
  storageBucket: "d-nal-task-manager.appspot.com", 
  messagingSenderId: "271048729351",
  appId: "1:271048729351:web:1d59427bc6bcfad6dc5ba2",
  measurementId: "G-P58J88Y9M9"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);


enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    console.warn("⚠️ Persistencia offline falló (multi-tab conflict)");
  } else if (err.code === 'unimplemented') {
    console.warn("⚠️ Persistencia offline no soportada");
  }
});

export default db;



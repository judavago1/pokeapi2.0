import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDisbhk4yjhgaLeDE_qZRuMWZdSsLZwSTo",
  authDomain: "pokeapi2-691ab.firebaseapp.com",
  projectId: "pokeapi2-691ab",
  storageBucket: "pokeapi2-691ab.firebasestorage.app",
  messagingSenderId: "604478415225",
  appId: "1:604478415225:web:f1d3971e70695d116e4fa8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBoA5Rv6QMz2Igql7dnlT_Z-xWsM_0szhg",
    authDomain: "codercurso-react-prueba.firebaseapp.com",
    projectId: "codercurso-react-prueba",
    storageBucket: "codercurso-react-prueba.appspot.com",
    messagingSenderId: "731065917198",
    appId: "1:731065917198:web:5e9d44388fbdbc84e2415f"
};

const app = initializeApp(firebaseConfig);

export const DB = getFirestore(app)
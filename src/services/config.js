// La primer funcion es para iniciar la conexion con firebase y la segunda es para obtener una instancia de Firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration:
const firebaseConfig = {
    apiKey: "AIzaSyBaxgi7fkLUc62KGMS4WxCl3LACmdv0z1s",
    authDomain: "produccion-d814f.firebaseapp.com",
    projectId: "produccion-d814f",
    storageBucket: "produccion-d814f.appspot.com",
    messagingSenderId: "298609361742",
    appId: "1:298609361742:web:6b84910a158f9e54b5541f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Creamos una referencia de nuestra conexion a la base de datos y la exportamos para que este disponible en toda la App

export const db = getFirestore(app);
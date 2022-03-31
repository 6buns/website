import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-FqYcQw3aZl7fvs139nHZZe1HEVHhhQs",
  authDomain: "vide-336112.firebaseapp.com",
  projectId: "vide-336112",
  storageBucket: "vide-336112.appspot.com",
  messagingSenderId: "614615467955",
  appId: "1:614615467955:web:d153745472915b45072dc6"
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);

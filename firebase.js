import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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

export const storage = getStorage(app)

if (!isProduction) {
  connectFirestoreEmulator(db, 'localhost', 8080);
  connectAuthEmulator(auth, "http://localhost:9099");
}

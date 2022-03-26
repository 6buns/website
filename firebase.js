import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { keyGen } from "./keyGen";
import { apikey, publickey, user } from "./src/store";

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

export const db = getDatabase(app);

export const login = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log("User Logged In.");
      user.update((e) => (e = { ...result }))
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);

      return { errorCode, errorMessage, email, credential };
    });
};

export const logout = () => {
  console.log('incoming')
  signOut(auth)
    .then(() => {
      user.set({});
      console.log('yeah', $user)
    })
    .catch((error) => {
      console.error(error);
    });
};

onAuthStateChanged(auth, (u) => {
  user.update((e) => (e = { ...u }));
});

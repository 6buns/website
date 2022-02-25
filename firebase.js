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

var firebaseConfig = {
  apiKey: "AIzaSyBk4jHWqZuza97tipWXlp1IBviRWofE1L8",
  authDomain: "vide-server.firebaseapp.com",
  projectId: "vide-server",
  storageBucket: "vide-server.appspot.com",
  messagingSenderId: "56731503187",
  appId: "1:56731503187:web:c3b45d7f44ff06bba694a6",
  measurementId: "${config.measurementId}",
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

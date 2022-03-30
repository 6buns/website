import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { user } from "./src/store";

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
// export const googleProvider = new GoogleAuthProvider();

// export const db = getFirestore(app);

// export const login = () => {
//   signInWithPopup(auth, googleProvider)
//     .then(async (result) => {
//       console.log("User Logged In.", result.user.uid);

//       try {
//         const querySnapshot = await getDocs(query(collection(db, 'users'), where('user_id', '==', result.user.uid)))
//         console.log(querySnapshot, querySnapshot.empty)
//         if (!querySnapshot.empty) {
//           console.log('data exists', querySnapshot.docs[0])
//           const data = querySnapshot.docs[0]
//           user.update((e) => (e = { ...data }))
//           console.log(user)
//         } else {
//           console.log("No Snapshot, NEW USER");
//           const data = result.user
//           user.update((e) => (e = { ...data }))
//           console.log(user)
//         }
//       } catch (error) {
//         console.error(error)
//       }
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       const email = error.email;
//       const credential = GoogleAuthProvider.credentialFromError(error);

//       return { errorCode, errorMessage, email, credential };
//     });
// };

// export const logout = () => {
//   console.log('incoming')
//   signOut(auth)
//     .then(() => {
//       user.set({});
//       console.log('yeah', $user)
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

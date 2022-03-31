import { initializeApp } from 'firebase/app';
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { useMachine } from './useMachine';
import { initAuthMachine } from './authMachine';
import { auth } from '../../firebase';

const userMapper = claims => ({
    id: claims.user_id,
    name: claims.name,
    email: claims.email,
    picture: claims.picture
});

const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(provider);
};

// define XState services
const services = {
    authChecker: () =>
        // wrap the onAuthStateChanged hook in a promise and
        // immediately unsubscribe when triggered
        new Promise((resolve, reject) => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                unsubscribe();
                return resolve(user)
            }, (error) => reject(error));
        }),
    authenticator: (_, event) => {
        return loginWithGoogle();
    },
    loader: (ctx, _) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                ctx.auth
                    .getIdTokenResult()
                    .then(({ claims }) => userMapper(claims))
                    .then(resolve).catch(reject);
            }, 1500);
        });
    },
    logout: () => new Promise((resolve, reject) => signOut(auth).then(resolve).catch(reject))
};

const authMachine = initAuthMachine(services);

export const initAuth = () => {
    return useMachine(authMachine);
};

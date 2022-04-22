import {
    onAuthStateChanged,
    signInWithPopup,
    sendSignInLinkToEmail,
    signOut
} from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useMachine } from './useMachine';
import { initAuthMachine } from './authMachine';
import { auth, googleProvider, db, githubProvider } from '../../firebase';

const userMapper = claims => ({
    id: claims.user_id,
    name: claims.name,
    email: claims.email,
    phone: claims.phone,
    picture: claims.picture
});

const loginWithGoogle = () => signInWithPopup(auth, googleProvider)

const loginWithMagicLink = (email) => sendSignInLinkToEmail(auth, email, {
    url: 'https://6buns.com',
    dynamicLinkDomain: '6buns.com'
})

const loginWithGithub = () => signInWithPopup(auth, githubProvider)

// define XState services
const services = {
    authChecker: () =>
        // wrap the onAuthStateChanged hook in a promise and
        // immediately unsubscribe when triggered
        new Promise((resolve, reject) => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                unsubscribe();
                return user ? resolve(user) : reject('no user')
            }, (error) => reject(error));
        }),
    authenticator: (_, event) => {
        switch (event.provider) {
            case 'email':
                return loginWithMagicLink(event.email);
            case 'github':
                return loginWithGithub();
            case 'google':
                return loginWithGoogle();
            default:
                break;
        }
    },
    loader: (ctx, _) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                ctx.auth ?
                    ctx.auth
                        .getIdTokenResult()
                        .then(({ claims }) => userMapper(claims))
                        .then(async (user) => {
                            try {
                                const userData = await getDocs(
                                    query(collection(db, "customers"), where("userId", "==", user.id))
                                );
                                if (!userData.empty) {
                                    const data = userData.docs[0].data();
                                    user = { ...user, ...data };
                                }
                                return user;
                            } catch (error) {
                                return reject(error)
                            }
                        })
                        .then(resolve) : reject('No User');
            }, 1500);
        });
    },
    logout: () => new Promise((resolve, reject) => signOut(auth).then(resolve).catch(reject))
};

const authMachine = initAuthMachine(services);

export const initAuth = useMachine(authMachine);

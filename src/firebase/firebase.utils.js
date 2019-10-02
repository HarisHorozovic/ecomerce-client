import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyBqzPQOsmuF_XxV_JXz-LUqdJ62qQxk7oY',
    authDomain: 'crwn-db-e7569.firebaseapp.com',
    databaseURL: 'https://crwn-db-e7569.firebaseio.com',
    projectId: 'crwn-db-e7569',
    storageBucket: '',
    messagingSenderId: '1017222828091',
    appId: '1:1017222828091:web:0e19871ffdb33848790c1e',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google Auth Utils
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

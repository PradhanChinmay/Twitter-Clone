import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
 
const firebaseConfig = {
    apiKey: "AIzaSyBtK9YBgoCl0ctFlA9M8pfqXopz6wZYk6M",
    authDomain: "twitter-clone-6df9c.firebaseapp.com",
    projectId: "twitter-clone-6df9c",
    storageBucket: "twitter-clone-6df9c.appspot.com",
    messagingSenderId: "719858360226",
    appId: "1:719858360226:web:3322bb0995830e25979cfb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAblCnc1-v-W1P4tu4j4EFOiKd2wcrcDFw',
  authDomain: 'bardle-7120d.firebaseapp.com',
  projectId: 'bardle-7120d',
  storageBucket: 'bardle-7120d.appspot.com',
  messagingSenderId: '101485081091',
  appId: '1:101485081091:web:c5029ffa472c62f51c5436',
  measurementId: 'G-YRCB5PG9CG',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


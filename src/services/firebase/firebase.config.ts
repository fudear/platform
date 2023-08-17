// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAOqTxqkqr34AMweoU8HeAbq6gMywdRuOU',
  authDomain: 'truecycle-2ba71.firebaseapp.com',
  projectId: 'truecycle-2ba71',
  storageBucket: 'truecycle-2ba71.appspot.com',
  messagingSenderId: '200556846655',
  appId: '1:200556846655:web:31b06e3edca1b46bbd228a',
  measurementId: 'G-JC0FWKRCV1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firebaseStorage = getStorage(app);

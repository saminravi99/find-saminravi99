// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB1Gw9HRP5pMJACgnUC_mqkhcE01fHlCrM',
  authDomain: 'find-saminravi.firebaseapp.com',
  projectId: 'find-saminravi',
  storageBucket: 'find-saminravi.appspot.com',
  messagingSenderId: '796032543299',
  appId: '1:796032543299:web:5baf4461e23317552f02f6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

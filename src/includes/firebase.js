import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCqDtbTTMPAvBGPKb3m82Hru-Pk868H6gU',
  authDomain: 'songify-db732.firebaseapp.com',
  projectId: 'songify-db732',
  storageBucket: 'songify-db732.appspot.com',
  messagingSenderId: '738229097160',
  appId: '1:738229097160:web:498b9bd5dcfa07091bcbfd'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };

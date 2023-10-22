// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC36lsvh7nFfO4O9TncwBqnSBMhvO29sCk',
  authDomain: 'blogpostscuidarehealth.firebaseapp.com',
  projectId: 'blogpostscuidarehealth',
  storageBucket: 'blogpostscuidarehealth.appspot.com',
  messagingSenderId: '919284291240',
  appId: '1:919284291240:web:fe7ea9b1b24006e4dc549d',
  measurementId: 'G-N5SXHCRDDK',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };

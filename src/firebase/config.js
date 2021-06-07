import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD5re0HjRSA1lkNRHnx9c2ExqUmj3hX9Y8",
    authDomain: "infocus-gallery.firebaseapp.com",
    projectId: "infocus-gallery",
    storageBucket: "infocus-gallery.appspot.com",
    messagingSenderId: "566193762799",
    appId: "1:566193762799:web:7420b3fae0dfca1f9c861a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };

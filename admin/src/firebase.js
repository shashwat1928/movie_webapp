import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBV-LQ3o-j-STP3eOi6DIVMu7FBh9xcrLY",
  authDomain: "netflix-cd035.firebaseapp.com",
  projectId: "netflix-cd035",
  storageBucket: "netflix-cd035.appspot.com",
  messagingSenderId: "496365083968",
  appId: "1:496365083968:web:43bd436a7467fb8a292ea5",
  measurementId: "G-5JB2PEDD1Y"
};


firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;

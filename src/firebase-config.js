// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo6cMeGbL1DiT0obD_3CSeWRoyL6CCSxA",
  authDomain: "blog-21200.firebaseapp.com",
  projectId: "blog-21200",
  storageBucket: "blog-21200.appspot.com",
  messagingSenderId: "467828083139",
  appId: "1:467828083139:web:62a1f36763ccb301349576"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

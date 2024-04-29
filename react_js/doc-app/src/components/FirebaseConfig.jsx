import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAUloOPJDtpcl_lnY6LqG39WZKjeKoXEPo",
  authDomain: "doc-app-ec626.firebaseapp.com",
  projectId: "doc-app-ec626",
  storageBucket: "doc-app-ec626.appspot.com",
  messagingSenderId: "572108823020",
  appId: "1:572108823020:web:4996dfe69ad9cd6ee048c9",
  measurementId: "G-JVRXH6CK97"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app)
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDu2dMpPZabmLxDFHaixTJye6MO8SL6A2Y",
  authDomain: "doc-app-eb919.firebaseapp.com",
  projectId: "doc-app-eb919",
  storageBucket: "doc-app-eb919.appspot.com",
  messagingSenderId: "513757712859",
  appId: "1:513757712859:web:427cc991f941b0e8d497fe",
  measurementId: "G-WYFP0D91S2"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app)
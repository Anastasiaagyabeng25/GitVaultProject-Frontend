// firebase.config.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Your Firebase config object goes here
  apiKey: "AIzaSyBOkujhk0UvR67PiFG5D1JAAhi_cfLGZCY",
  authDomain: "gitvau.firebaseapp.com",
  projectId: "gitvau",
  storageBucket: "gitvau.firebasestorage.app",
  messagingSenderId: "622157442802",
  appId: "1:622157442802:web:856f6475ff329afe032a6b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export default app;

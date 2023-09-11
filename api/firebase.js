import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCFx3wlLuMA6X0CRq_ihIk0kRd0Y6oQ66Q",
    authDomain: "fir-auth-demo-67519.firebaseapp.com",
    projectId: "fir-auth-demo-67519",
    storageBucket: "fir-auth-demo-67519.appspot.com",
    messagingSenderId: "1059903242448",
    appId: "1:1059903242448:web:b18da1200d73e248231ed5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; // データベースオブジェクトをエクスポート
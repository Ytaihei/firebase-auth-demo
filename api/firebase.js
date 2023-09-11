import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3dLYu7MDldnw7PTeTEuA2vzqO0nLE7Ho",
  authDomain: "fir-auth-demo-af346.firebaseapp.com",
  projectId: "fir-auth-demo-af346",
  storageBucket: "fir-auth-demo-af346.appspot.com",
  messagingSenderId: "750436528877",
  appId: "1:750436528877:web:bfe35c1f5b24998d9ad2e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; // データベースオブジェクトをエクスポート
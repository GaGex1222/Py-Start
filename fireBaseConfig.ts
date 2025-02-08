
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "py-start-51051.firebaseapp.com",
  projectId: "py-start-51051",
  storageBucket: "py-start-51051.firebasestorage.app",
  messagingSenderId: "944177829955",
  appId: "1:944177829955:web:cd8c9bd80f9af61faa5cf6",
  measurementId: "G-H9FT2H34JK"
};

export const app = initializeApp(firebaseConfig);
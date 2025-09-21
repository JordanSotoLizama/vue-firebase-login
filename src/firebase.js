import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAt81pM44ucj40vXHUBArmRRfmDrA3008w",
  authDomain: "clinica-mvp-25ffd.firebaseapp.com",
  projectId: "clinica-mvp-25ffd",
  storageBucket: "clinica-mvp-25ffd.firebasestorage.app",
  messagingSenderId: "683797184873",
  appId: "1:683797184873:web:781a19f21d82aa9e79fdf8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
import { initializeApp } from "firebase/app";
import {
  doc,
  getDocs,
  addDoc,
  updateDoc,
  getFirestore,
  collection,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAUklNYHbeg_gcAnDjw5CxsV-os6GPe-n4",
  authDomain: "pwas-d64fa.firebaseapp.com",
  projectId: "pwas-d64fa",
  storageBucket: "pwas-d64fa.firebasestorage.app",
  messagingSenderId: "815902445878",
  appId: "1:815902445878:web:740c3391cf7a403b0f2397",
  measurementId: "G-6K4JV0VNQF",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

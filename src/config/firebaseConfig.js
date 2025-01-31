import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFr8ytdrm30TgfNxAl9pcPmFS1LM-Uspg",
  authDomain: "blogapplication-1c13e.firebaseapp.com",
  projectId: "blogapplication-1c13e",
  storageBucket: "blogapplication-1c13e.firebasestorage.app",
  messagingSenderId: "410803615792",
  appId: "1:410803615792:web:d8ca796de943f0a63d15f5",
  measurementId: "G-JNT0E089TH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to add data to Firestore
export const saveDocument = async (title, content) => {
    await addDoc(collection(db, "documents"), { title, content });
};

// Function to fetch data
export const getDocuments = async () => {
    const snapshot = await getDocs(collection(db, "documents"));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export { db };
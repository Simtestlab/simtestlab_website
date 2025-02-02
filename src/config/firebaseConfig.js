import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, Timestamp, doc, updateDoc, getDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY || "AIzaSyAFr8ytdrm30TgfNxAl9pcPmFS1LM-Uspg",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN|| "blogapplication-1c13e.firebaseapp.com",
  projectId: process.env.REACT_APP_PROJECT_ID || "blogapplication-1c13e",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET || "blogapplication-1c13e.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID || "410803615792",  
  appId: process.env.REACT_APP_APP_ID || "1:410803615792:web:d8ca796de943f0a63d15f5",
  measurementId: process.env.REACT_APP_MEASUREMENT_ID || "G-JNT0E089TH",
};

if (!firebaseConfig.apiKey) {
    console.error("Firebase API Key is missing! Check your .env file.");
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (error) {
        console.error("Error during Google Sign in:", error);
        throw error;
    }
};

export const logOut = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Error signing out:", error);
    }
}

export const saveDocument = async (title, description, content, tags) => {
    const user = auth.currentUser;

    if (!user) {
        console.error("No user is logged in.");
        return;
    }

    const userName = user.displayName || user.email;
    const createdAt = Timestamp.fromDate(new Date());

    try {
        await addDoc(collection(db, "documents"), {
            title,
            description,
            content,
            authorPhoto: user.photoURL,
            userName,
            tags,
            createdAt,
            updatedAt: createdAt,
        });
    } catch (error) {
        console.error("Error saving document:", error);
    }
};

export const getDocuments = async () => {
    const snapshot = await getDocs(collection(db, "documents"));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getDocumentById = async (docId) => {
    const docRef = doc(db, "documents", docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        return null;
    }
};

export const updateDocument = async (docId, updatedData) => {
    const docRef = doc(db, "documets", docId);
    try {
        await updateDoc(docRef, {
            ...updatedData,
            updatedAt: Timestamp.fromDate(new Date())
        });
        return true;
    } catch (error) {
        console.error("Error updating document:", error);
        return false;
    }
};

export { app, db, auth, storage };
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,  
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

if (!firebaseConfig.apiKey) {
    console.error("Firebase API Key is missing! Check your .env file.");
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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

export const saveDocument = async (title, content, tags) => {
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
            content,
            photo: user.photoURL,
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

export { app, db, auth };
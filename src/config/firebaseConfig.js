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
const storage = getStorage(app);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log("Result: ", result);
        return result;
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
            userId: auth.currentUser.uid,
            description,
            content,
            authorPhoto: user.photoURL,
            userName,
            tags,
            createdAt,
            updatedAt: createdAt,
            metaData: {
                seoTitle: title + "| Simtestlab",
                seoDescription: description.substring(0, 160),
                seoKeywords: tags.join(", "),
                ogImage: user.photoURL || "",
            }
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
    const docRef = doc(db, "documents", docId);
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
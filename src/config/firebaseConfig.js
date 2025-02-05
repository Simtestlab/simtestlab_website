import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, Timestamp, doc, updateDoc, getDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from "firebase/auth";
import getCredentials from "./config";

let firebaseConfig;
let app, db, storage, auth;

const initializeFirebase = async () => {
    try {
        const credentials = await getCredentials();

        if (!credentials || !credentials.API_KEY) {
            throw new Error("Firebase credentials are missing!");
        }
        firebaseConfig = {
            apiKey: credentials.API_KEY,
            authDomain: credentials.AUTH_DOMAIN,
            projectId: credentials.PROJECT_ID,
            storageBucket: credentials.STORAGE_BUCKET,
            messagingSenderId: credentials.MESSAGING_SENDER_ID,
            appId: credentials.APP_ID,
            measurementId: credentials.MEASUREMENT_ID,
        };

        app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        storage = getStorage(app);
        auth = getAuth(app);
        return { app, db, storage, auth };
    } catch (error) {
        console.error("Error initializing Firebase:", error);
        return null;
    }
};

const firebaseServices = await initializeFirebase();
if (!firebaseServices) {
    throw new Error("Firebase initialization failed!");
}

({ app, db, storage, auth } = firebaseServices);

if (!firebaseConfig.apiKey) {
    console.error("Firebase API Key is missing! Check your .env file.");
}

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
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
        await addDoc(collection(db, "Blog_DB"), {
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
    const snapshot = await getDocs(collection(db, "Blog_DB"));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getDocumentById = async (docId) => {
    const docRef = doc(db, "Blog_DB", docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        return null;
    }
};

export const updateDocument = async (docId, updatedData) => {
    const docRef = doc(db, "Blog_DB", docId);
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
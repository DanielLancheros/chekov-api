import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import creds from "..creds.js";

// this connects us to our firebase project
initializeApp({
    credential: cert(creds)
});

export default getFirestore() // this connects to our DB


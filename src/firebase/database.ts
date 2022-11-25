import {
    initializeFirestore,
    doc, addDoc, updateDoc,
    getDoc, getDocs, collection,
    onSnapshot, arrayUnion,
    setDoc, query, orderBy, deleteDoc, limit, startAfter, limitToLast
} from 'firebase/firestore';

import app from './clientApp';

const db = initializeFirestore(app, {
    experimentalForceLongPolling: true
});

const addDocument = async (collectionName: string, doc: any) => {
    const { id } = await addDoc(collection(db, collectionName), doc);

    return id;
}

const setDocument = async (collectionName: string, document: any, id: string) => {
    const docRef = doc(db, collectionName, id);

    return await setDoc(docRef, document);
}

const deleteDocument = async (collectionName: string, documentId: string) => {
    const docRef = doc(db, collectionName, documentId);

    return await deleteDoc(docRef);
}

const getDocuments = async (collectionName: string) => {
    const collectionRef = collection(db, collectionName);

    return await getDocs(query(collectionRef, orderBy("dateCreated", "asc")));
}

const getDocument = async (collectionName: string, documentId: string) => {
    const docRef = doc(db, collectionName, documentId);
    const docSnap = getDoc(docRef);

    if ((await docSnap).exists()) return (await docSnap).data();

    return false;
}

export { addDocument, setDocument, deleteDocument, getDocuments, getDocument }


'use client';
import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
  addDoc,
  setDoc,
  doc,
  getDoc,
  deleteDoc,
  orderBy,
  updateDoc,
} from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import { champ } from './useFirebase.model';

export const useFirebase = () => {
  const getChamps = async () => {
    const snap = await getDocs(collection(db, 'champs'));
    const data = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return data;
  };

  const getChampByName = async (champ: string) => {
    const snap = await getDocs(query(collection(db, 'champs'), where('shortname', '==', champ)));
    const data = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(data);
  };

  return {
    getChamps,
    getChampByName,
  };
};

// export const getChamps = async () => {
//   const snap = await getDocs(collection(db, 'champs'));
//   const data = snap.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));

//   console.log(data);
// };


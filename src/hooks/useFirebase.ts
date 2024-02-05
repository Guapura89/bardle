'use client';
import {
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
import { Champ } from './useFirebase.model';
import { generateDailyNumber, generateYesterdayNumber } from '@/utils/getRandomNumber';

export const useFirebase = () => {
  const getAllChamps = async () => {
    const snap = await getDocs(collection(db, 'champs'));
    const data = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return data;
  };

  const getChampByName = async (champ: string) => {
    const snap = await getDocs(query(collection(db, 'champs'), where('shortName', '==', champ)));
    const data = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return data[0];
  };

  const getDailyChamp = async () => {
    const champs = await getAllChamps();
    const daily = champs.filter((item, index) => index === generateDailyNumber());
    return daily;
  };

  const getYesterdayChamp = async () => {
    const champs = await getAllChamps();
    const yesterday = champs.filter((item, index) => index === generateYesterdayNumber());
    return yesterday;
  };

  const addChamp = (data: Champ) => {
    addDoc(collection(db, 'champs'), data)
      .then((res) => {
        console.log(res.id);
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };

  return {
    getAllChamps,
    getChampByName,
    getDailyChamp,
    getYesterdayChamp,
    addChamp,
  };
};

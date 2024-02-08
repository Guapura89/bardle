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
import { Champ } from '@/store/store.model';
import { generateDailyNumber, generateYesterdayNumber } from '@/utils/classicModeNumber';
import { useChampStore } from '@/store/champStore';

export const useFirebase = () => {
  const { setChamps, champs } = useChampStore();

  const getAllChamps = async () => {
    const snap = await getDocs(collection(db, 'champs'));
    const data: Champ[] = snap.docs.map((doc) => ({
      roleChamp: doc.data().roleChamp,
      genderChamp: doc.data().genderChamp,
      titleChamp: doc.data().titleChamp,
      partypeChamp: doc.data().partypeChamp,
      shortName: doc.data().shortName,
      displayName: doc.data().displayName,
      rangeType: doc.data().rangeType,
      quotesStack: doc.data().quotesStack,
      specieChamp: doc.data().specieChamp,
      positionChamp: doc.data().positionChamp,
      emojiStack: doc.data().emojiStack,
      regionFrom: doc.data().regionFrom,
      releaseDate: doc.data().releaseDate,
      id: doc.id,
    }));

    setChamps(data);
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
    const daily = champs?.filter((item, index) => index === generateDailyNumber());
    return daily;
  };

  const getYesterdayChamp = async () => {
    const yesterday = champs?.filter((item, index) => index === generateYesterdayNumber());
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

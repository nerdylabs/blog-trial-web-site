import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  };

firebase.initializeApp(config);

export const firestore = firebase.firestore();
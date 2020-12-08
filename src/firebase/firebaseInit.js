/**
 * @fileoverview Initializes and configures portfolio project firebase instance connection
 * @exports { auth, db }
 */

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//firebase config object from firebase console
const firebaseConfig = {
  // Add configuration here
};

//if firebase is not initialized, initialize it
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

//pull out firebase auth(), firebase() to object
const auth = firebase.auth();
const db = firebase.firestore();

//export statement
export { auth, db };

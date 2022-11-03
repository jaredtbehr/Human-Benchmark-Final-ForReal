// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9XCEXVYsfkD3e-DAdw0ZNRuFkLIoEv_M",
  authDomain: "human-benchmark-app.firebaseapp.com",
  databaseURL: "https://human-benchmark-app-default-rtdb.firebaseio.com",
  projectId: "human-benchmark-app",
  storageBucket: "human-benchmark-app.appspot.com",
  messagingSenderId: "38547506701",
  appId: "1:38547506701:web:4acf3cea5c0b0d59fd3744",
  measurementId: "G-VDM8RTTGWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
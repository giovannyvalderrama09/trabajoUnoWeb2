// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkDMNNZLMawSNstxYqChWCMzHcW_EkVl4",
  authDomain: "giovannytiendacesde-74a4a.firebaseapp.com",
  projectId: "giovannytiendacesde-74a4a",
  storageBucket: "giovannytiendacesde-74a4a.appspot.com",
  messagingSenderId: "412823199540",
  appId: "1:412823199540:web:4f219a3c2bd36c0a8b8f61",
  measurementId: "G-P6DNPEBG4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
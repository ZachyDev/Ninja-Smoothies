 import firebase from 'firebase';
 import firestore from 'firebase/firestore';
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBkuONkUOXO-6Jwbl996hGnHA_oHEAp1G8",
  authDomain: "nsmoothies.firebaseapp.com",
  databaseURL: "https://nsmoothies.firebaseio.com",
  projectId: "nsmoothies",
  storageBucket: "nsmoothies.appspot.com",
  messagingSenderId: "330788223845",
  appId: "1:330788223845:web:36ef6e994424503892ff8c"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })
// Export firestore database
export default firebaseApp.firestore();

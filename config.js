 import firebase from "firebase";

  const firebaseConfig = {
    apiKey: "AIzaSyBj_T4rd3RlYpfjI-CqCOzMJfNzOUzX_Xs",
    authDomain: "school-attendance-10dff.firebaseapp.com",
    databaseURL: "https://school-attendance-10dff-default-rtdb.firebaseio.com",
    projectId: "school-attendance-10dff",
    storageBucket: "school-attendance-10dff.appspot.com",
    messagingSenderId: "677379334154",
    appId: "1:677379334154:web:dd3691df7fb6fd2a27fff3"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
  export default firebase.database()
 

  
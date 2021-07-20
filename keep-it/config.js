import firebase from 'firebase';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD0PbPgevRPXFkyZLy2hOgYGCfIUepWb1I",
    authDomain: "keep-it-41116.firebaseapp.com",
    databaseURL: "https://keep-it-41116-default-rtdb.firebaseio.com",
    projectId: "keep-it-41116",
    storageBucket: "keep-it-41116.appspot.com",
    messagingSenderId: "726934615840",
    appId: "1:726934615840:web:06b509a4505c772f324945"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();
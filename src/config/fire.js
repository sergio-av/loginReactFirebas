import firebase from 'firebase';

//Informacion de la aplicacion desde firebase
const config = {
    apiKey: "AIzaSyDUdlrHGszpT4crFTIMPl6Q18bfhQyj7TM",
    authDomain: "login-a7d18.firebaseapp.com",
    projectId: "login-a7d18",
    storageBucket: "login-a7d18.appspot.com",
    messagingSenderId: "323080071320",
    appId: "1:323080071320:web:16214d88cca9d9c03648ed",
    measurementId: "G-CWZ999PFDD"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(config);
  export default fire;

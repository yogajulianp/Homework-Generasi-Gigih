import Firebase from "firebase";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAod9Vu7aWgvBOkP4DtgTK2WHVWRxYDcsk",
    authDomain: "yoga-practice-406cd.firebaseapp.com",
    projectId: "yoga-practice-406cd",
    storageBucket: "yoga-practice-406cd.appspot.com",
    messagingSenderId: "428607840794",
    appId: "1:428607840794:web:2e2dd5c63aa34f3b3767a3"
  };

  const firebase = Firebase.initializeApp(firebaseConfig)

  export { firebase};
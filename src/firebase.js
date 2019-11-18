
import firebase from 'firebase/app'
import 'firebase/database'
//import{ initializeApp } from 'firebase';
// // \<!-- The core Firebase JS SDK is always required and must be listed first -->
// {/* <script src="https://www.gstatic.com/firebasejs/7.4.0/firebase-app.js"></script> */}

// // <!-- TODO: Add SDKs for Firebase products that you want to use
// //      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.4.0/firebase-analytics.js"></script>

// 
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
export const db = firebase

  .initializeApp({
      apiKey: "AIzaSyAutOLNahietvIkNbvpFHbgWSoBX8EgqiA",
      authDomain: "crudtest-a7249.firebaseapp.com",
      databaseURL: "https://crudtest-a7249.firebaseio.com",
      projectId: "crudtest-a7249",
      storageBucket: "crudtest-a7249.appspot.com",
      messagingSenderId: "318073376801",
      appId: "1:318073376801:web:efeb4b614c3992c7961360",
      measurementId: "G-L1FBTWC9LL" 
    })
  .database()


// const app = initializeApp({
//     apiKey: "AIzaSyAutOLNahietvIkNbvpFHbgWSoBX8EgqiA",
//     authDomain: "crudtest-a7249.firebaseapp.com",
//     databaseURL: "https://crudtest-a7249.firebaseio.com",
//     projectId: "crudtest-a7249",
//     storageBucket: "crudtest-a7249.appspot.com",
//     messagingSenderId: "318073376801",
//     appId: "1:318073376801:web:efeb4b614c3992c7961360",
//     measurementId: "G-L1FBTWC9LL"
//   });
export const namesRef = db.ref('names');
  //export const db = app. database();
 
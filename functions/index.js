var functions = require('firebase-functions');

var firebase = require('firebase');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


var config = {
    apiKey: "AIzaSyBW3hyyIllKMLTFzel32B2ebyvFi8r7DTE",
    authDomain: "fir-ece58.firebaseapp.com",
    databaseURL: "https://fir-ece58.firebaseio.com",
    projectId: "fir-ece58",
    storageBucket: "fir-ece58.appspot.com",
    messagingSenderId: "62175377859"
  };
  firebase.initializeApp(config);

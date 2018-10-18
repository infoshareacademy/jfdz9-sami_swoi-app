import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB2EcA6uF6VIcXJ5dvwl3yXJxtAT6NKQus",
    authDomain: "sami-swoi-app.firebaseapp.com",
    databaseURL: "https://sami-swoi-app.firebaseio.com",
    projectId: "sami-swoi-app",
    storageBucket: "sami-swoi-app.appspot.com",
    messagingSenderId: "469768113264"
};
firebase.initializeApp(config);
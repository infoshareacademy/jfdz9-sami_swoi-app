import firebase from 'firebase';

const config = {
    apiKey: "fqpfCQNVV3UmQ7P32U3AI15Nzuk2",
    authDomain: "samiswoi-64674.firebaseapp.com",
    databaseURL: "https://samiswoi-64674.firebaseio.com",
    projectId: "samiswoi-64674",
    storageBucket: "samiswoi-64674.appspot.com",
    messagingSenderId: "424342247841"
};
const app = firebase.initializeApp(config);

export const database = app.database();
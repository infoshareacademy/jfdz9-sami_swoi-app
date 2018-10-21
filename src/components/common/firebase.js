import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDyrHf6GWTbRqPUZCN3Lh0NS6eClrwUVk8",
    authDomain: "ss-jobs-search.firebaseapp.com",
    databaseURL: "https://ss-jobs-search.firebaseio.com",
    projectId: "ss-jobs-search",
    storageBucket: "ss-jobs-search.appspot.com",
    messagingSenderId: "780388662203"
};

export const app = firebase.initializeApp(config);
export const database = app.database();

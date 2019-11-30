import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDoqCCnkfXxEaFRZ3zWjX9iC0vJ1bWblsU",
    authDomain: "projeto-bhs-4a0ff.firebaseapp.com",
    databaseURL: "https://projeto-bhs-4a0ff.firebaseio.com",
    projectId: "projeto-bhs-4a0ff",
    storageBucket: "projeto-bhs-4a0ff.appspot.com",
    messagingSenderId: "989371894934",
    appId: "1:989371894934:web:a61e237e53e6b8491586b7",
    measurementId: "G-FBBXTBYEJ1"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
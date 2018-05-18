import * as firebase from 'firebase';
    // Initialize Firebase
    const config = {
    apiKey: "AIzaSyBdACnym8qImyS8NNhiEqzVvHs5fHhKLPc",
    authDomain: "nbadb-751d5.firebaseapp.com",
    databaseURL: "https://nbadb-751d5.firebaseio.com",
    projectId: "nbadb-751d5",
    storageBucket: "",
    messagingSenderId: "382841294795"
};
    firebase.initializeApp(config);

    const firebaseDB = firebase.database();
    const firebaseArticles = firebaseDB.ref('articles');
    const firebaseTeams = firebaseDB.ref('teams');
    const firebaseVideos = firebaseDB.ref('videos');

    const firebaseLooper = (snapshot) => {
        const data = [];
        snapshot.forEach((childSnapshot) => {
            data.push({
                ...childSnapshot.val(),
                id:childSnapshot.key
            })
        });
        return data;
    };
    export {
        firebase,
        firebaseDB,
        firebaseArticles,
        firebaseTeams,
        firebaseVideos,
        firebaseLooper
    }


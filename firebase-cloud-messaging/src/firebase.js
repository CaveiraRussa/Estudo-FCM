import * as firebase from "firebase/app";
import "firebase/messaging";


const config ={
    apiKey: "AIzaSyDQOtJLOTNnD0p03dbNPyLKttoPhISUoqM",
    authDomain: "fir-cloud-messaging-379af.firebaseapp.com",
    databaseURL: "https://fir-cloud-messaging-379af.firebaseio.com",
    projectId: "fir-cloud-messaging-379af",
    storageBucket: "fir-cloud-messaging-379af.appspot.com",
    messagingSenderId: "1081227225213",
    appId: "1:1081227225213:web:1afe53577d982bbd6b2914",

};
firebase.initializeApp(config)
export default firebase
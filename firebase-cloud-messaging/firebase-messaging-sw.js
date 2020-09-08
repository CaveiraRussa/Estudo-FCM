importScripts ('https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js')
importScripts ('https://www.gstatic.com/firebasejs/7.19.1/firebase-messaging.js')


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }
firebase.initializeApp({
    apiKey: "AIzaSyDQOtJLOTNnD0p03dbNPyLKttoPhISUoqM",
    authDomain: "fir-cloud-messaging-379af.firebaseapp.com",
    databaseURL: "https://fir-cloud-messaging-379af.firebaseio.com",
    projectId: "fir-cloud-messaging-379af",
    storageBucket: "fir-cloud-messaging-379af.appspot.com",
    messagingSenderId: "1081227225213",
    appId: "1:1081227225213:web:1afe53577d982bbd6b2914",
})

const initMessaging = firebase.messaging()
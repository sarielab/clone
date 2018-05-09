import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBdnXuUY4NcM0jlPslTviR96hMpsFrCZws',
  authDomain: 'fbclone-a84c2.firebaseapp.com',
  databaseURL: 'https://fbclone-a84c2.firebaseio.com',
  projectId: 'fbclone-a84c2',
  storageBucket: 'fbclone-a84c2.appspot.com',
  messagingSenderId: '329703995794'
};

firebase.initializeApp(config);
export const ref = firebase.database().ref();

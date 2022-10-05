import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import * as firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import {BrowserRouter} from "react-router-dom";

firebase.initializeApp({
    apiKey: "AIzaSyB7bGxPsE4K1K8unQsow3eeJGOXNvijVkE",
    authDomain: "raun-chess.firebaseapp.com",
    databaseURL: "https://raun-chess-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "raun-chess",
    storageBucket: "raun-chess.appspot.com",
    messagingSenderId: "65633140977",
    appId: "1:65633140977:web:313d4c9cfdb51a0ab16950"
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
);

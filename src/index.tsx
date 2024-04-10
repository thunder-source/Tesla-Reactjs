import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDlXNkBSQ2g18kFzPPYCuzHD608Tm1pI9A',
  authDomain: 'tesla-79889.firebaseapp.com',
  projectId: 'tesla-79889',
  storageBucket: 'tesla-79889.appspot.com',
  messagingSenderId: '959000456784',
  appId: '1:959000456784:web:bf5738b6d1726a5366eb55',
  measurementId: 'G-0BZQXENZZR',
};

export const provider = new GoogleAuthProvider();

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

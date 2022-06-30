import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignInSide from './components/auth/SignInSide'
import RegisterSide from './components/auth/RegisterSide'
import Profil from './components/pages/Profil';
import Produk from './components/pages/Produk';
import Edfuus from './components/pages/EditFotoUser';
import Edpro from './components/pages/EditProfil';
import Cobs from './components/pages/CobaDoang';
import Halpro from './components/pages/HalamanProduk';
import Dafju from './components/pages/DaftarJual';
import Inpar from './components/pages/InfoPenawar';

axios.defaults.withCredentials = true;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signin" element ={
            <SignInSide/>
          } />
          <Route path="/register" element ={
            <RegisterSide/>
          } />
           <Route path="/lengkapi-profil" element ={<Profil />} />
           <Route path="/produk" element ={<Produk />} />
           <Route path="/edit-foto-user" element ={<Edfuus />} />
           <Route path="/edit-profil" element ={<Edpro />} />
           <Route path="/NyobaQaqa" element ={<Cobs />} />
           <Route path="/halaman-produk" element ={<Halpro />} />
           <Route path="/daftar-jual" element ={<Dafju />} />
           <Route path="/info-penawar" element ={<Inpar />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

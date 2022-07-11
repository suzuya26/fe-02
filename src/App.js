import './App.css';
import Landing from './components/pages/LandingPage';
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
import Protected from './components/services/Protected';
import CheckProfile from './components/services/CheckProfile';
import CheckLogin from './components/services/CheckLogin';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element ={
            <SignInSide/>
          } />
          <Route path="/register" element ={
            <CheckLogin><RegisterSide/></CheckLogin>
          } />
           <Route path="/lengkapi-profil" element ={<Protected><Profil /></Protected>} />
           <Route path="/produk" element ={<Protected><Produk /></Protected>} />
           <Route path="/edit-foto-user" element ={<Protected><Edfuus /></Protected>} />
           <Route path="/edit-profil" element ={<Protected><Edpro /></Protected>} />
           <Route path="/NyobaQaqa" element ={<Cobs />} />
           <Route path="/halaman-produk" element ={<Protected><Halpro /></Protected>} />
           <Route path="/daftar-jual" element ={<Protected><Dafju /></Protected>} />
           <Route path="/info-penawar" element ={<Protected><Inpar /></Protected>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
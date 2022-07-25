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
import Form from './components/Layouts/FormProduk';
import Perkategori from './components/pages/Perkategori'
import DaftarJualSemua from './components/Layouts/DaftarJualSemua';
import DaftarJualFavorit from './components/Layouts/DaftarJualFavorit';
import DaftarJualTerjual from './components/Layouts/DaftarJualTerjual';
import DetailTawaran from './components/pages/DetailTawaran';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/per/:category" element={<Perkategori />} />
        <Route path="/signin" element={
          <SignInSide />
        } />
        <Route path="/register" element={
          <CheckLogin><RegisterSide /></CheckLogin>
        } />
        <Route path="/lengkapi-profil" element={<Protected>
          <Profil />
          </Protected>} />
        <Route path="/jual-produk" element={<Protected>
          <CheckProfile><Produk /></CheckProfile>
          </Protected>} />
        <Route path="/edit-foto-user" element={<Protected>
          <Edfuus />
          </Protected>} />
        <Route path="/edit-profil" element={<Protected>
          <Edpro />
          </Protected>} />
        <Route path="/halaman-produk/:id" element={<Protected>
          <CheckProfile><Halpro /></CheckProfile>
          </Protected>} />
        <Route path="/daftar-jual/:idseller" element={<Protected>
          <Dafju /> <DaftarJualSemua/>
          </Protected>} />
        <Route path="/daftar-jual/favorit/:idseller" element={<Protected>
          <Dafju /> <DaftarJualFavorit/>
          </Protected>} />
        <Route path="/daftar-jual/terjual/:idseller" element={<Protected>
          <Dafju /> <DaftarJualTerjual/>
          </Protected>} />
        <Route path="/info-penawar/:idproduk" element={<Protected>
          <Inpar />
          </Protected>} />
        <Route path="/detail-tawaran/:zaparam" element={<Protected>
          <DetailTawaran />
          </Protected>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
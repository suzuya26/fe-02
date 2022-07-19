import '../../App.css';
import Carousel from '../Layouts/Carousel';
import MahaNavbar from '../Layouts/MahaNavbar';
import ProdukPerkategori from '../Layouts/ProdukPerkategori';

function App() {
  return (
    <div className="App">
      <header>
        <MahaNavbar/>
      </header>
      <main>
        <Carousel/>
        <ProdukPerkategori/>
      </main>
    </div>
  );
}

export default App;

import '../../App.css';
import Carousel from '../Layouts/Carousel';
import MahaNavbar from '../Layouts/MahaNavbar';
import Telusuri from "../Layouts/TelusuriKategori"

function App() {
  return (
    <div className="App">
      <header>
        <MahaNavbar/>
      </header>
      <main>
        <Carousel/>
        <Telusuri/>
      </main>
    </div>
  );
}

export default App;

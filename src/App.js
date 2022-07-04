import './App.css';
import Carousel from './components/Layouts/Carousel';
import MahaNavbar from './components/Layouts/MahaNavbar';
import Telusuri from "./components/Layouts/TelusuriKategori"

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

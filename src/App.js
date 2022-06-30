import './App.css';
import CardList from './components/Layouts/CardList';
import Carousel from './components/Layouts/Carousel';
import Category from './components/Layouts/Category';
import MahaNavbar from './components/Layouts/MahaNavbar';
import { Container } from '@mui/system';
import List from "./components/Layouts/ListJual"

function App() {
  return (
    <div className="App">
      <header>
        <MahaNavbar/>
      </header>
      <div>
      <Container>
      <Carousel/>
      <Category/>
      <CardList/>
      </Container>
      </div>
    </div>
  );
}

export default App;

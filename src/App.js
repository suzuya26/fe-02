import './App.css';
import CardList from './components/Layouts/CardList';
import Carousel from './components/Carousel/Carousel';
import Category from './components/Layouts/Category';
import MahaNavbar from './components/Layouts/MahaNavbar';
import { Container } from '@mui/system';
import Form from './components/Layouts/Form';

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
      <CardList/>    <Form/>
      </Container>
  
      </div>
    </div>
  );
}

export default App;

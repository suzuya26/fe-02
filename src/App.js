import logo from './logo.svg';
import './App.css';
import NavBar from './components/Layouts/NavBar';
import CardList from './components/Layouts/CardList';
import Carousel from './components/Carousel/Carousel';
import Category from './components/Layouts/Category';
function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <CardList/>
      <Carousel/>
      <Category/>
    </div>
  );
}

export default App;

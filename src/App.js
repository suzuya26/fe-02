import logo from './logo.svg';
import './App.css';
import NavBar from './components/Layouts/NavBar';
import CardList from './components/Layouts/CardList';
function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <CardList/>
    </div>
  );
}

export default App;

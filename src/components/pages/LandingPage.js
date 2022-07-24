import '../../App.css';
import Carousel from '../Layouts/Carousel';
import MahaNavbar from '../Layouts/MahaNavbar';
import Telusuri from "../Layouts/TelusuriKategori"
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      <header>
        <MahaNavbar/>
      </header>
      <main>
        <Box sx={{ justifyContent: 'center' }}>
        <Carousel/>
        </Box>
        <Telusuri/>
      </main>
    </div>
  );
}

export default App;

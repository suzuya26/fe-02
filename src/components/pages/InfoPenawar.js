import MahaNavbar from '../Layouts/MahaNavbar';
import Dafpen from '../Layouts/DaftarPenawar';
import Laopan from '../Layouts/layout3';

function InfoPenawar() {
    return (
      <div>
        <header>
            <MahaNavbar/>
        </header>
        <main>
          <Dafpen/>
          <Laopan/>
        </main>
      </div>
    );
  }
  
  export default InfoPenawar;
import Cobs from "../Layouts/Layout";
import Prof from "../Layouts/Layout2";
import Layzhang from "../Layouts/Layout4";
import MahaNavbar from '../Layouts/MahaNavbar';
import Modus from '../Layouts/ModalStatus';

function CobaDoang() {
    return (
      <div>
        <header>
          <MahaNavbar/>
        </header>
        <main>
          <Layzhang/>
          <Modus/>
        </main>
      </div>
    );
  }
  
  export default CobaDoang;
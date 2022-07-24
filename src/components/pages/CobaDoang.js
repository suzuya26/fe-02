import MahaNavbar from '../Layouts/MahaNavbar';
import Notif from "../Layouts/Notif"
import Nav from "../Layouts/AppBar"
import Hambergour from "../Layouts/Hamburgeur"
import Display from "../Layouts/Display/Display"

function CobaDoang() {
    return (
      <div>
        <header>
          <MahaNavbar/>
          <Nav/>
        </header>
        <main>
          <Notif/>
          <Hambergour/>
          <Display/>
        </main>
      </div>
    );
  }
  
  export default CobaDoang;
import MahaNavbar from '../Layouts/MahaNavbar';
import Notif from "../Layouts/Notif"
import Nav from "../Layouts/AppBar"
import Hambergour from "../Layouts/Hamburgeur"

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
        </main>
      </div>
    );
  }
  
  export default CobaDoang;
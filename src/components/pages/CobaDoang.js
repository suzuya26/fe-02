import MahaNavbar from '../Layouts/MahaNavbar';
import Notif from "../Layouts/Notif"
import Nav from "../Layouts/AppBar"

function CobaDoang() {
    return (
      <div>
        <header>
          <MahaNavbar/>
          <Nav/>
        </header>
        <main>
          <Notif/>
        </main>
      </div>
    );
  }
  
  export default CobaDoang;
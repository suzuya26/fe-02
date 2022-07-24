import MahaNavbar from '../Layouts/MahaNavbar';
import Notif from "../Layouts/Notif"
import Nav from "../Layouts/AppBar"
import Swiper from "../Layouts/Swipper/Swiper"

function CobaDoang() {
    return (
      <div>
        <header>
          <MahaNavbar/>
          <Nav/>
        </header>
        <main>
          <Notif/>
          <Swiper/>
        </main>
      </div>
    );
  }
  
  export default CobaDoang;
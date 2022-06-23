import InProf from "../Layouts/InfoProfil";
import MahaNavbar from "../Layouts/MahaNavbar";
import Box from "@mui/material/Box";

function Profil() {
    return (
      <div>
        <header>
          <MahaNavbar/>
        </header>
        <main>
            <InProf/>
        </main>
      </div>
    );
  }
  
  export default Profil;
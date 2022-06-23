import InProd from "../Layouts/InfoProduk";
import MahaNavbar from "../Layouts/MahaNavbar";

function Produk() {
    return (
      <div>
        <header>
          <MahaNavbar/>
        </header>
        <main>
            <InProd/>
        </main>
      </div>
    );
  }
  
  export default Produk;
import InfoProduk from "../Layouts/InfoProduk";
import MahaNavbar from "../Layouts/MahaNavbar";

function Produk() {
    return (
      <div>
        <header>
          <MahaNavbar/>
        </header>
        <main>
            <InfoProduk/>
        </main>
      </div>
    );
  }
  
  export default Produk;
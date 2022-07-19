import InfoProduk from "../Layouts/InfoProduk";
import MahaNavbar from "../Layouts/MahaNavbar";
import FormProduk from '../Layouts/FormProduk'

function Produk() {
    return (
      <div>
        <header>
          <MahaNavbar/>
        </header>
        <main>
            <FormProduk/>
        </main>
      </div>
    );
  }
  
  export default Produk;
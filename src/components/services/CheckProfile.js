import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

function CheckProfile ({children}){
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token)
    if(decoded.alamat==null || decoded.kota==null || decoded.nama==null || decoded.nohp==null || decoded.namaprofilimg==null)return <Navigate to="/lengkapi-profil"/>
    return children
}

export default CheckProfile
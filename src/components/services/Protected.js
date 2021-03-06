import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

function Protected({children}){
    const token = localStorage.getItem("token");
    if (!token) return <Navigate to="/signin"/>
    return children
}

export default Protected
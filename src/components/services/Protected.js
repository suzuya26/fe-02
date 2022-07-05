import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

function Protected({children}){
    const token = Cookies.get('jwt')
    if (!token) return <Navigate to="/signin"/>
    return children
}

export default Protected
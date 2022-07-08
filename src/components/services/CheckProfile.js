import { Navigate } from "react-router-dom";


function CheckProfile ({children}){
    const token = localStorage.getItem("token");

    if(token!=null)return <Navigate to="/lengkapi-profil"/>
    return children
}

export default CheckProfile
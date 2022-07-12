import React from 'react'
import Cookies from 'js-cookie';
import NavBarGuest from './NavBarGuest';
import NavBar from './NavBar';
import Nav from "../Layouts/AppBar"

function MahaNavbar() {
    
    const token = localStorage.getItem("token");
    console.log(token)

    if(!token){
        return (
            <NavBarGuest/>
          )
    } else {
        return (<Nav/>)
    }

}

export default MahaNavbar

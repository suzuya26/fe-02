import React from 'react'
import Cookies from 'js-cookie';
import NavBarGuest from './NavBarGuest';
import NavBar from './NavBar';

function MahaNavbar() {
    
    const token = localStorage.getItem("token");
    console.log(token)

    if(!token){
        return (
            <NavBarGuest/>
          )
    } else {
        return (<NavBar/>)
    }

}

export default MahaNavbar

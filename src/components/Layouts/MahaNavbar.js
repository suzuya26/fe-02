import React from 'react'
import Cookies from 'js-cookie';
import NavBarGuest from './NavBarGuest';
import NavBar from './NavBar';

function MahaNavbar() {
    
    const token = Cookies.get('jwt')
    console.log(token)

    if(token===undefined){
        return (
            <NavBarGuest/>
          )
    } else {
        return (<NavBar/>)
    }

}

export default MahaNavbar

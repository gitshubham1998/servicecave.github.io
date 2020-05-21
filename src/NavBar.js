import React from 'react';
import { Link } from 'react-router-dom';
import ServiceImg2 from './Images/ServiceImg2.jpg'
function NavBar() {
    const navAStyle = {
         color: 'white'
    };
    return (
       <nav className="nav">
          
            <img className='image' src={ServiceImg2} alt='Shubham'></img>
           <ul className="container-nav"> 
            <Link to='/Form/Login' style={navAStyle}>
               <li>Login</li>
           </Link>
                <Link to='/Form/SignUp' style={navAStyle}>
               <li>SignUp</li>
            </Link>
                <Link to='/Home' style={navAStyle}>
                    <li>Home</li>
                </Link>
                <Link to='/aboutUs' style={navAStyle}>
                    <li>About</li>
                </Link>
            
           </ul>
       </nav>
    )
}

export default NavBar

import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css'; // Import the CSS for styling
import logo1   from '../../../logos/Logo.png'
import logo2   from '../../../logos/logo2.png'
// import home    from '../../../homeq.png'
   
import home from '../../../logos/Navbar/homeq.png'
import bus from '../../../logos/Navbar/bus.png'
import sunbed from '../../../logos/Navbar/sunbed.png'
import about from '../../../logos/Navbar/about.png'
import hotel from '../../../logos/Navbar/hotel.png'
import AuthContext from '../../../context/authcontext';

import Button from '../Button';
import LogoutBTN from '../../auth/logoutBTN';
// import main1 from '../../../logos/main1.png'
// import main2 from '../../../logos/main2.png'
function Navbar() {


  const [username , setusernmae] = useState("");

  const { loggedIn, user } = useContext(AuthContext);

    useEffect(() => {
        if (loggedIn) {
          setusernmae(user.name);
        }
      }, [loggedIn, user.name]);


      var nameuser = username || ""

  console.log("LoggedIN in navbar ==> ",loggedIn);

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`} >
    <div className="logo">
      <a href="/">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          </a>
    </div>
    <div className="menu ">
      <div className="menu-toggle" onClick={toggleNavbar}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav-items ${isOpen ? 'open' : ''}`}>
        <li><a href="/"> <img src={home} alt="" />Home</a></li>
        <li><a href="/trektravel"><img src={sunbed} alt="" />Hospitals</a></li>
        <li><a href="/hotels"><img src={hotel} alt="" />Hotels</a></li>
        <li><a href="/transport"><img src={bus} alt="" />Transport</a></li>
        <li><a href="/about"><img src={about} alt="" />About</a></li>
        {/* <li><a href="/"><img src={contact} alt="" />Contact Us</a></li> */}
       
       {loggedIn===false && 
       
        <a href="/login">
        <Button name = "Sign Up"/>
        </a>
        }
       {loggedIn===undefined && 
       
        
        <Button name = "Loading..."/>
        }



       {loggedIn===true && 
<li>
       
       <div className="usericon">
        <a href="/profile">
          <i className='fa fa-user'></i>
          {nameuser.split(" ")[0]}
        </a>
          </div>
        </li>
        }
      
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;

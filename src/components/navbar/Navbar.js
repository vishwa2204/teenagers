import React from 'react'
import { useRef } from 'react'
import '../navbar/Navbar.css'
import { Link } from 'react-router-dom'
// ///////////////////////////////////////////
import brandLogo from '../../assets/images/logo/LOGO.png'

///////////////Icon/////////////////
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {

  const navRef = useRef();

  const showNavbar = ()=>{
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <>
    <header>
      <nav >
          <div className="nav-logo" >
            <Link to={"/"}><img src={brandLogo} alt="Logo" /></Link>
          </div>
          <div className="nav-menus" ref={navRef}>
            <ul>
              <Link to={"/"}><li>Home</li></Link>
              <Link to={"who-teenages"}><li>Who is Teenages</li></Link>
              <Link to={"services"}><li>Services</li></Link>
              <Link to={"team"}><li>Team</li></Link>
              <Link to={"case-studies"}><li>Case Studies</li></Link>
              <Link to={"contact"}><li>Contact</li></Link>
              <button className='nav-btn nav-close-btn' onClick={showNavbar}><IoCloseSharp /></button>
            </ul>
           
          </div>
         
          <button className='nav-btn nav-close-btn' onClick={showNavbar}><FaBars/></button>
      </nav>
    </header>
    </>
  )
}

export default Navbar
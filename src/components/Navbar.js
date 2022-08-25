import React from 'react';
import '../style/App.scss';
import '../style/Responsive.scss';
import NavbarMenu from './Navbar_small_devices';

const Navbar = () => {
  const openNav = () => {
    document.getElementById("navbarSM").style.height = "100%";
  }
  const closeNav = () => {
    document.getElementById("navbarSM").style.height = "0%";
  }
  return ( 
    <div className='navbar-wrap' id="navbar-wrap">
      <NavbarMenu closeNav={closeNav}/>
      <div className='navbar-title'>
        <h1><a id="site-name" href="#">Bryxx</a></h1>
      </div>
      <nav className='navbar-menu'>
        <ul>
          <li>
            <a className='nav-link' href="#">Projects</a>
          </li>
          <li>
            <a className='nav-link' href="#">About</a>
          </li>
          <li>
            <a className='nav-link' href="#">Contact</a>
          </li>
          <li>
            <a className='nav-link' id="resume" href="#">Resume</a>
          </li>
          <li>
            <a className='nav-link' id="nav-menu" onClick={openNav} href="#"><i class="bi bi-menu-button-wide"></i></a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;

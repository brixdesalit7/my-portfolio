import React from 'react';
import '../style/App.scss';
import '../style/Responsive.scss';


const Navbar = () => {
  return ( 
    <div className='navbar-wrap'>
      <div className='navbar-title'>
        <h1><a id="site-name" href="#">Bryxx</a></h1>
      </div>
      <nav className='navbar-menu'>
        <ul>
          <li>
            <a className='nav-link' href="#">Projects</a>
          </li>
          <li>
            <a className='nav-link' href="#">Certificates</a>
          </li>
          <li>
            <a className='nav-link' href="#">About</a>
          </li>
          <li>
            <a className='nav-link' href="#">Contacts</a>
          </li>
          <li>
            <a className='nav-link' href="#"><i className="nav-icons bi bi-envelope-fill"></i></a>
          </li>
          <li>
            <a className='nav-link' href="#"><i className="nav-icons bi bi-facebook"></i></a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;

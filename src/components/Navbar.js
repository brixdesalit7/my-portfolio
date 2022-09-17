import React from 'react';
import '../style/App.scss';
import '../style/Responsive.scss';
import NavbarMenu from './Navbar_small_devices';
import { useInView } from 'react-intersection-observer';
import myResume from './resume.pdf';


const Navbar = () => {
  // open nav function
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.zIndex = "9";
    document.getElementById("nav-menu").style.display = "none";
  }
  // // close nav function
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0%";
    document.getElementById("nav-menu").style.display = "block";
  }
  // smoothscroll function
  const makeNavLinksSmooth = () => {
    const navLinks = document.querySelectorAll('.nav-link');

    for(let n in navLinks) {
      if(navLinks.hasOwnProperty(n)) {
        navLinks[n].addEventListener('click', e => {
          e.preventDefault();
          document.querySelector(navLinks[n].hash)
          .scrollIntoView({
            behavior : 'smooth'
          });
        });
      }
    }
  }
  const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();

  makeNavLinksSmooth();

  return ( 
    <div className='navbar-wrap' id="navbar-wrap" ref={magicSectionRef}>
      <NavbarMenu closeNav={closeNav} resume={myResume}/>
      <div className={`${'navbar-title'} ${magicSectionIsVisible ? 'fade-in-title' : ''}`} >
        <h1><a id="site-name" href="#">Bryxx</a></h1>
      </div>
      <nav className={`${'navbar-menu'} ${magicSectionIsVisible ? 'fade-in-nav' : ''}`}>
        <ul>
          <li>
            <a className='nav-link' href="#about-me">About</a>
          </li>
          <li className='active'>
            <a className='nav-link' href="#project-section">Projects</a>
          </li>
          <li>
            <a className='nav-link' href="#contact">Contact</a>
          </li>
          <li>
          <a href={myResume} 
            target="_blank" 
            rel="noreferrer"
            id="resume">
            Resume
          </a>
          </li>
          <li>
            <a className='nav-link' id="nav-menu" rel='noreferrer' onClick={openNav} href="#"><i className="bi bi-menu-button-wide"></i></a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;

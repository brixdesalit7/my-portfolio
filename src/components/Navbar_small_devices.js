import React from 'react'

const Navbar_small_devices = (props) => {
    return (
    <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={props.closeNav}><i className="bi bi-x"></i></a>
        <div className="overlay-content">
            <a href="#project-section">Project</a>
            <a href="#about-me">About</a>
            <a href="#contact">Contact</a>
            <a href={props.resume} 
            target="_blank" 
            rel="noreferrer"
            id="resume">
            Resume
            </a>
        </div>
    </div>

    )
}

export default Navbar_small_devices
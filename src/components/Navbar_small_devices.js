import React from 'react'

const Navbar_small_devices = (props) => {
    return (
    <div id="mySidenav" className="sidenav">
        <button className="closebtn" onClick={props.closeNav}><i className="bi bi-x"></i></button>
        <div className="overlay-content">
            <a title='project' href="#project-section">Project</a>
            <a title='about-me' href="#about-me">About</a>
            <a title='contact' href="#contact">Contact</a>
            <a title='resume' href={props.resume} 
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
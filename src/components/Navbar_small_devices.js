import React from 'react'

const Navbar_small_devices = (props) => {
    return (
    <div id="navbarSM" class="overlay">
        <a href="javascript:void(0)" className="closebtn" onClick={props.closeNav}><i class="bi bi-x"></i></a>
        <div class="overlay-content">
            <a href="#project-section">Project</a>
            <a href="#about-me">About</a>
            <a href="#contact">Contact</a>
            <a className='nav-link' id="resume" href="#">Resume</a>
        </div>
    </div>
    )
}

export default Navbar_small_devices
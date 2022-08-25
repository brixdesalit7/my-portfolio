import React from 'react'

const Navbar_small_devices = (props) => {
    return (
    <div id="navbarSM" class="overlay">
        <a href="javascript:void(0)" className="closebtn" onClick={props.closeNav}><i class="bi bi-x"></i></a>
        <div class="overlay-content">
            <a href="#">Project</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#"><i className="nav-icons bi bi-envelope-fill"/></a>
            <a href="#"><i class="bi bi-linkedin"></i></a>
            <a className='nav-link' id="resume" href="#">Resume</a>
        </div>
    </div>
    )
}

export default Navbar_small_devices
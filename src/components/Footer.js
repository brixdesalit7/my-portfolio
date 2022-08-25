import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-content'>
        <div className='footer-logo'>
            <h1>Bryxx</h1>
        </div>
        <div className='footer-tagline'>
            <p>Practice. Practice. </p>
            <p>Code. Code</p>
            <p>Repeat</p>
        </div>
        <div className='footer-icons'>
            <ul>
                <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
                <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                <li><a href="#"><i class="bi bi-twitter"></i></a></li>
                <li><a href="#"><i class="bi bi-google"></i></a></li>
                <li><a href="#"><i class="bi bi-tiktok"></i></a></li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Footer
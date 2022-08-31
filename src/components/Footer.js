import React from 'react'

const Footer = () => {
  return (
    <div className='footer' id="contact">
    <div className='footer-content'>
        <div className='footer-logo'>
            <h1>Let's work together</h1>
        </div>
        <div className='footer-icons'>
            <ul>
                <li><a href="https://www.linkedin.com/in/bryxx-andre-desalit-559680249/" target="_blank"><i class="bi bi-linkedin"></i></a></li>
                <li><a href="https://www.facebook.com/xxyrb" target="_blank"><i class="bi bi-facebook"></i></a></li>
                <li><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZXhxtRXTMNNcNWVhMrGbnlWhmZKZjJlBVlChjFJBtzPCShDTjcRfBXtLWQcplZRbkpbFg" target="_blank"><i class="bi bi-google"></i></a></li>
                <li><a href="https://github.com/brixdesalit7" target="_blank"><i class="bi bi-github"></i></a></li>
            </ul>
        </div>
        <div className='footer-tagline'>
            <p>Practice. Practice. </p>
            <p>Code. Code</p>
            <p>Repeat</p>
        </div>
    </div>
    <div className='copyright'>
        Designed & Built by Bryxx Andre Desalit
    </div>
    </div>
  )
}

export default Footer
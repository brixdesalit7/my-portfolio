import React from 'react'

const Footer = () => {
  return (
    <div className='footer' id="contact">
    <div className='footer-content'>
        <div className='footer-logo'>
            <h2>Let's work together</h2>
        </div>
        <div className='footer-icons'>
            <ul>
                <li><a href="https://www.linkedin.com/in/bryxx-andre-desalit-559680249/" target="_blank"><i className="bi bi-linkedin"></i></a></li>
                <li><a href="https://www.facebook.com/xxyrb" target="_blank"><i className="bi bi-facebook"></i></a></li>
                <li><a href="mailto:brixdesalit7@gmail.com" target="_blank"><i className="bi bi-google"></i></a></li>
                <li><a href="https://github.com/brixdesalit7" target="_blank"><i className="bi bi-github"></i></a></li>
            </ul>
        </div>
    </div>
    <div className='copyright'>
        <small>Designed & Built by Bryxx Andre Desalit </small>
    </div>
    </div>
)
}

export default Footer
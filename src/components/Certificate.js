import React from 'react'
import '../style/App.scss';
import '../style/Responsive.scss';


const Certificate = (props) => {
  return (
    <div className='certificate'>
        <div className='certificate-content'>
            <h2>My Certificate</h2>
            <div className='certificate-grid'>
              <div className='certificate-image'>
                <img src={props.webResponsive} alt="Web-Responsive-Certificate"/>
              </div>
              <div className='certificate-image'>
                <img src={props.frontEnd} alt="Front-End-Certificate"/>
              </div>
              <div className='certificate-image'>
                <img src={props.javaScript} alt="Javascript-Certificate"/>
              </div>
              <div className='certificate-image'>
                <img src={props.certiPHP} alt="PHP-Certificate"/>
              </div>
              <div className='certificate-image'>
                <img src={props.certiSQL} alt="SQL-Certificate"/>
              </div>
              <div className='certificate-image'>
                <img src={props.jqueryCerti} alt="jquery-Certificate"/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Certificate
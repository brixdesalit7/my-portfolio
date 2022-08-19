import React, { useState } from 'react'
import '../style/App.scss';
import '../style/Responsive.scss';
import FsLightbox from 'fslightbox-react';


const Certificate = (props) => {
  // ligthbox
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
    });
    
    const openLightboxOnSlide = (number) => {
    setLightboxController({
    toggler: !lightboxController.toggler,
    slide: number
    });
    }
  return (
    <div className='certificate'>
        <div className='certificate-content'>
            <h2>My Certificate</h2>
            <FsLightbox
            toggler={lightboxController.toggler}
            sources={[
            props.webResponsive,
            props.frontEnd,
            props.javaScript,
            props.certiPHP,
            props.certiSQL,
            props.jqueryCerti
            ]}
            initialAnimation="scale-in-long"
            slideChangeAnimation="scale-in"
            slide={lightboxController.slide}
            />
            <div className='certificate-grid'>
              <div className='certificate-image'>
                <img
                onClick={() => openLightboxOnSlide(1)}
                className="hover-shadow cursor" 
                src={props.webResponsive} 
                alt="Web-Responsive-Certificate"/>
            
              </div>
              <div className='certificate-image'>
                <img
                onClick={() => openLightboxOnSlide(2)}
                className="hover-shadow cursor" 
                src={props.frontEnd} 
                alt="Front-End-Certificate"/>
              
              </div>
              <div className='certificate-image'>
                <img
                onClick={() => openLightboxOnSlide(3)} 
                className="hover-shadow cursor" 
                src={props.javaScript}
                alt="Javascript-Certificate"/>
              </div>
              <div className='certificate-image'>
                <img
                onClick={() => openLightboxOnSlide(4)} 
                className="hover-shadow cursor" 
                src={props.certiPHP} 
                alt="PHP-Certificate"/>
              </div>
              <div className='certificate-image'>
                <img
                onClick={() => openLightboxOnSlide(5)}
                className="hover-shadow cursor" 
                src={props.certiSQL} 
                alt="SQL-Certificate"/>
              </div>
              <div className='certificate-image'>
                <img 
                onClick={() => openLightboxOnSlide(6)}
                className="hover-shadow cursor" 
                src={props.jqueryCerti} 
                alt="jquery-Certificate"/>
              </div>
            </div>
        </div>
        {/* <button style={{marginTop : "400px"}} onClick={() => setToggler(!toggler)}>
        Toggle Lightbox
        </button>
        <FsLightbox
        toggler={toggler}
        sources={[
        'https://i.imgur.com/fsyrScY.jpg',
        'https://www.youtube.com/watch?v=3nQNiWdeH2Q',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        ]}
        /> */}
    </div>
  )
}

export default Certificate
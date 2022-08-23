import React from 'react'
import FsLightbox from 'fslightbox-react';
import { useState } from 'react';

const Project = (props) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
    });
    
    function openLightboxOnSlide(number) {
    setLightboxController({
    toggler: !lightboxController.toggler,
    slide: number
    });
    }
    
  return (
    <section id="project-section">
      <h2>Projects</h2>
      <div className='project-wrapper'>
            <FsLightbox
            toggler={lightboxController.toggler}
            sources={[
            props.blogWeb,
            props.bmsWeb
            ]}
            thumbs={[
              props.blogWeb,
              props.bmsWeb
              ]}
            slide={lightboxController.slide}
            />
        <div className='project-img' id='project-1' onClick={() => openLightboxOnSlide(2)}>
            <div className="content">
              {/* <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank"> */}
                <div className="content-overlay"></div>
                <img className="content-image" src={props.blogWeb}/>
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Blog Website</h3>
                  <p className="content-text">Wordpress</p>
                </div>
              {/* </a> */}
            </div>
        </div>
        <div className='project-img' id="project-2">
            <div className="content">
              {/* <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank"> */}
                <div className="content-overlay"></div>
                <img className="content-image" src={props.bmsWeb}/>
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Web Based Barangay Management System</h3>
                  <p className="content-text">PHP, MySQL, Bootstrap</p>
                </div>
              {/* </a> */}
            </div>
        </div>
        <div className='project-img' id='project-3'>
            <div className="content">
              {/* <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank"> */}
                <div className="content-overlay"></div>
                <img className="content-image" src={props.cashierWeb}/>
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Web Based Cashier POS System</h3>
                  <p className="content-text">PHP, MySQL, Jquery, Bootstrap</p>
                </div>
              {/* </a> */}
            </div>
        </div>
        <div className='project-img' id='project-4'>
            <div className="content">
              {/* <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank"> */}
                <div className="content-overlay"></div>
                <img className="content-image" src={props.digitalClock}/>
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Digital Clock</h3>
                  <p className="content-text">Javascript</p>
                </div>
              {/* </a> */}
            </div>
        </div>
        <div className='project-img' id='project-5'>
            <div className="content">
              {/* <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank"> */}
                <div className="content-overlay"></div>
                <img className="content-image" src={props.schoolWebsite}/>
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Datamex Website</h3>
                  <p className="content-text">PHP, Javascript, Bootstrap, MySQL</p>
                </div>
              {/* </a> */}
            </div>
        </div>
        <div className='project-img' id='project-6'>
            <div className="content">
              {/* <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank"> */}
                <div className="content-overlay"></div>
                <img className="content-image" src={props.randomQuote}/>
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Random Quote</h3>
                  <p className="content-text">Javascript, SASS</p>
                </div>
              {/* </a> */}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Project
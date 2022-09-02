import React from 'react'
import { useInView } from 'react-intersection-observer';
// import image 
import blog_1 from '../img/blog-website-1.png';
import blog_2 from '../img/blog-website-2.png';
import blog_3 from '../img/blog-website-3.jpg';
import blog_4 from '../img/blog-website-4.png';
import blog_5 from '../img/blog-website-5.jpg';
import bms_1 from '../img/bms-1.jpg';
import bms_2 from '../img/bms-2.jpg';
import bms_3 from '../img/bms-3.jpg';
import bms_4 from '../img/bms-4.jpg';
import bms_5 from '../img/bms-5.jpg';
import cashier_1 from '../img/cashier-pos-1.jpg';
import cashier_2 from '../img/cashier-pos-2.jpg';
import cashier_3 from '../img/cashier-pos-3.jpg';
import datamex_1 from '../img/datamex-1.jpg';
import datamex_2 from '../img/datamex-2.jpg';
import datamex_3 from '../img/datamex-3.jpg';
import datamex_4 from '../img/datamex-4.jpg';
import datamex_5 from '../img/datamex-5.jpg';



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
    const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();

  return (
    <section id="project-section">
      <h2>Personal Project</h2>
      <FsLightbox
            toggler={lightboxController.toggler}
            captions={[
              <>
              <h2>First image title</h2>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              </>,
              <h2>Second image title</h2>,
              'Third image caption'
              ]}
            type="image"
            sources={[
            props.blogWeb,
            blog_1,
            blog_5,
            blog_2,
            blog_3,
            blog_4,
            props.bmsWeb,
            bms_1,
            bms_5,
            bms_2,
            bms_3,
            bms_4,
            props.cashierWeb,
            cashier_1,
            cashier_2,
            cashier_3,
            props.digitalClock,
            props.schoolWebsite,
            datamex_1,
            datamex_2,
            datamex_3,
            datamex_4,
            datamex_5,
            props.randomQuote,
            props.markdownPrev,
            props.tributePage1,
            props.tributePage,
            props.watchflix_1,
            props.watchflix_2
            ]}
            slide={lightboxController.slide}
            initialAnimation="scale-in-long"
            slideChangeAnimation="scale-in"
            />
      <div ref={magicSectionRef} className={`${'project-wrapper'} ${magicSectionIsVisible ? 'fade-in-project' : ''}`}>
        <div className='project-img' id='project-1' onClick={() => openLightboxOnSlide(1)}>
            <div className="content">
                <div className="content-overlay"></div>
                <img className="content-image" src={props.blogWeb} alt="blog-website"/>
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Blog Website</h3>
                  <p className="content-text">Wordpress</p>
                </div>
            </div>
        </div>
        <div className='project-img' id="project-2" onClick={() => openLightboxOnSlide(7)}>
            <div className="content">
                <div className="content-overlay"></div>
                <img className="content-image" src={props.bmsWeb} alt="brgy-management-website"/>
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Web Based Barangay Management System</h3>
                  <p className="content-text">PHP, MySQL, Bootstrap</p>
                </div>
            </div>
        </div>
        <div className='project-img' id='project-3'  onClick={() => openLightboxOnSlide(13)}>
            <div className="content">   
                <div className="content-overlay"></div>
                <img className="content-image" src={props.cashierWeb} alt="cashier-website"/>
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Web Based Cashier POS System</h3>
                  <p className="content-text">PHP, MySQL, Jquery, Bootstrap</p>
                </div>
            </div>
        </div>
        <div className='project-img' id='project-4' onClick={() => openLightboxOnSlide(17)}>
            <div className="content">
                <div className="content-overlay"></div>
                <img className="content-image" src={props.digitalClock} alt="digital-clock-website"/>
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Digital Clock</h3>
                  <p className="content-text">Javascript</p>
                </div>
            </div>
        </div>
        <div className='project-img' id='project-5' onClick={() => openLightboxOnSlide(18)}>
            <div className="content">
                <div className="content-overlay"></div>
                <img className="content-image" src={props.schoolWebsite} alt="school-website"/>
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Datamex Website</h3>
                  <p className="content-text">PHP, Javascript, Bootstrap, MySQL</p>
                </div>
            </div>
        </div>
        <div className='project-img' id='project-6'  onClick={() => openLightboxOnSlide(24)}>
            <div className="content">
                <div className="content-overlay"></div>
                <img className="content-image" src={props.randomQuote} alt="random-quote-website"/>
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Random Quote</h3>
                  <p className="content-text">Javascript, SASS</p>
                </div>
            </div>
        </div>
        <div className='project-img' id='project-6'  onClick={() => openLightboxOnSlide(25)}>
            <div className="content">
                <div className="content-overlay"></div>
                <img className="content-image" src={props.markdownPrev} alt="random-quote-website"/>
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Markdown Previewer</h3>
                  <p className="content-text">Reactjs</p>
                </div>
            </div>
        </div>
        <div className='project-img' id='project-6'  onClick={() => openLightboxOnSlide(26)}>
            <div className="content">
                <div className="content-overlay"></div>
                <img className="content-image" src={props.tributePage1} alt="random-quote-website"/>
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Tribute Page</h3>
                  <p className="content-text">HTML, CSS</p>
                </div>
            </div>
        </div>
        <div className='project-img' id='project-6'  onClick={() => openLightboxOnSlide(28)}>
            <div className="content">
                <div className="content-overlay"></div>
                <img className="content-image" src={props.watchflix_1} alt="random-quote-website"/>
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Product Landing Page</h3>
                  <p className="content-text">HTML, CSS</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Project
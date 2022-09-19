import React from 'react'
import { useInView } from 'react-intersection-observer';

const AboutMe = (props) => {
  const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();

  return (
    <section id='About-me'>
      <h2>About Me </h2>
    <div className='about-wrapper'>
        <div className='my-image'>
          <img src={props.img} alt="myImage"/>
        </div>
        <div ref={magicSectionRef} className={`${'about-content'} ${magicSectionIsVisible ? 'fade-in-about' : ''}`}>
          <p>
          Hi, My name is Bryxx, I lived in Muntinlupa City, Philippines, I am a graduate of 3 years course of Diploma in 
          Information Technology from Datamex Institute of Computer Technology, I take an Information Technology course 
          in college because of their so many job opportunity on this field, and the field I'm really interested is web 
          development.
          </p>
          <p>
          In my first year of college I attended a free training program for creative web design by TESDA, which is an 
          8-week training every Saturday at our school, On this training, I learned how to use HTML and CSS languages 
          which is use to display and style a website.
          </p>
          <p>
          In the second year and third year of college, we have a capstone project, and I'm the only programmer in our 
          group who created a web barangay management system and web-based cashier POS system, I take this as an opportunity 
          to improve my skills in web development, After this project, I have now knowledge of front-end and back-end development
          and still continuing to learn technology.
          </p>
          <p>
          For the past month, I take free online courses on freeCodeCamp and Solo Learn and I get a certificate after the course 
          completion, this is where I learned how to use front-end development and libraries such as ReactJS, jQuery, SASS, 
          Bootstrap and WordPress (CMS).
          </p>
    
          <div className={`${'tech-stacks'} ${magicSectionIsVisible ? 'fade-in-about' : ''}`}>
            <h3>Technology Stacks</h3>
            <div className='tech-icons-wrapper'>
              <div className='tech-icons'>
                <img src={props.htmlLogo} alt="html-Logo"/>
              </div>
              <div className='tech-icons'>
                <img src={props.cssLogo} alt="css-Logo"/>
              </div>
              <div className='tech-icons'>
                <img src={props.javascriptLogo} alt="Javascript-Logo"/>
              </div>
              <div className='tech-icons'>
                <img src={props.reactjsLogo} alt="reactJS"/>
              </div>
              <div className='tech-icons'>
                <img src={props.bootstrapLogo} alt="bootstrap-Logo"/>
              </div>
              <div className='tech-icons'>
                <img src={props.sassLogo} alt="sass-Logo"/>
              </div>
              <div className='tech-icons'>
                <img src={props.jqueryLogo} alt="jquery-logo"/>
              </div>
              <div className='tech-icons'>
                <img src={props.phpLogo} alt="php-logo"/>
              </div>
              <div className='tech-icons'>
                <img src={props.mysqlLogo} alt="mysql-logo"/>
              </div>
              <div className='tech-icons'>
                <img src={props.wordpressLogo} alt="wordpress-logo"/>
              </div>
              <div className='tech-icons'>
                <img src={props.githubLogo} alt="github-logo"/>
              </div>
            </div>
          </div>
        </div>
    </div>
    </section>
  )
}

export default AboutMe
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
          Information Technology from Datamax Institute of Computer Technology, I take an Information Technology course 
          in college because of their so many job opportunity on this field, and the field I'm really interested in web 
          development.
          </p>
          <p>
          In my first year of college I attended a free training program for creative web design by TESDA, which is an 
          8-week training every Saturday at our school, On this training, I learned how to use HTML and CSS languages 
          which is use to display and style a website.
          </p>
          <p>
          In the second year and third year of college, we have a capstone project, me and my group created a web barangay 
          management system and web based cashier pos system, my role on this group is programmer which i see a chance to 
          gain additional knowledge in web development, after this project I have now knowledge in front-end and back-end 
          development.
          </p>
          {/* <p>
            In my college years i take a computer related course to gain additional knowledge, and then i started to learned hardware, networking and software development
            , but the Information Technology field really interested me is web development.
          </p> */}
          {/* <p>
            I started to study each languages used in Web Development, like HTML and CSS and create my own personal projects, 
            after a months of studying i have now knowledge in front-end and back-end web development and still continue to learning.
          </p> */}
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
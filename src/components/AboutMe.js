import React from 'react'


const AboutMe = (props) => {
  return (
    <section id='About-me'>
      <h2>About Me </h2>
    <div className='about-wrapper'>
        <div className='my-image'>
          <img src={props.img} alt="myImage"/>
        </div>
        <div className='about-content'>
          <p>
            Hi, My name is Bryxx, I lived in Muntinlupa City, Philippines, I am fresh graduate of 3 years course in 
            Diploma in Information Technology from Datamex Institute of Computer Technology.
          </p>
          <p>
            Since when i was a child I'm really fascinated in computer that is why on my college years i take a computer 
            related course to gain additional knowledge, and then i started to learned hardware, networking and software development
            , but the field really interested me is web development.
          </p>
          <p>
            Then i started to study each languages used in Web Development, like HTML and CSS and create my personal projects, after a months of studying i am 
            now familiar in front-end and back-end web development.
          </p>
          <div className='tech-stacks'>
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
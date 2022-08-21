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
            My name is Bryxx, I lived in Muntinlupa City, Philippines, I am fresh graduate of 3 years course in 
            Diploma in Information Technology from Datamex Institute of Computer Technology.
          </p>
          <p>
            Since when i was a child I'm really fascinated in computer that is why on my college years i take a computer 
            related course to gain additional knowledge, and then i started to learned hardware, networking and software development
            , but the field really interested me web development.
          </p>
          <p>
            Then i started to study each languages used in Web Development, like HTML and CSS, then after a months i am familiarize
            in front-end and back-end web development.
          </p>
          <h3>Tech Stacks: </h3>
        </div>
    </div>
    </section>
  )
}

export default AboutMe
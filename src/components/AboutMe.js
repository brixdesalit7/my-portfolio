import React from 'react'
import '../style/App.scss';
import '../style/Responsive.scss';
import Myimg from '../img/my-img.webp';

const AboutMe = () => {
  return (
    <section id='About-me'>
      <h2>About Me </h2>
    <div className='about-wrapper'>
        <div className='my-image'>
          <img src={Myimg} alt="myImage"/>
        </div>
        <div className='about-content'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem massa, eleifend maximus turpis quis, porta pulvinar erat. Donec faucibus venenatis erat id tincidunt. Maecenas ut pellentesque purus, at placerat tellus.</p>
        </div>
    </div>
    </section>
  )
}

export default AboutMe
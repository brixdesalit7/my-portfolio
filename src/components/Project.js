import React from 'react'

const Project = (props) => {
  return (
    <section id="project-section">
      <h2>Projects</h2>
    <div className='project-wrapper'>
      <div className='project-img'>
        <img src={props.blogWeb} alt="blog-website"/>
      </div>
      <div className='project-img'>
        <img src={props.bmsWeb} alt="brgy-management-website"/>
      </div>
      <div className='project-img'>
        <img src={props.cashierWeb} alt="cashier-website"/>
      </div>
      <div className='project-img'>
        <img src={props.digitalClock} alt="digital-clock-website"/>
      </div>
      <div className='project-img'>
        <img src={props.schoolWebsite} alt="school-website"/>
      </div>
      <div className='project-img'>
        <img src={props.randomQuote} alt="random-quote-website"/>
      </div>
    </div>
    </section>
  )
}

export default Project
import React from 'react';
// import stylesheet
import './style/App.scss';
import './style/Responsive.scss';
// import component
import  Navbar  from './components/Navbar';
import  Introduction  from './components/Introduction';
import AboutMe from './components/AboutMe';
import Myimg from './img/my-img.webp';
// Main component
function App() {
  return (
    <div>
      <header id="header-section">
        <Navbar/>
        <Introduction/>
      </header>
      <section id="about-me">
        <AboutMe img={Myimg}/>
      </section>
    </div>
  );
}

export default App;

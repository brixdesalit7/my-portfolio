import React from 'react';
// import stylesheet
import './style/App.scss';
import './style/Responsive.scss';
// import component
import  Navbar  from './components/Navbar';
import  Introduction  from './components/Introduction';
import AboutMe from './components/AboutMe';
import Certificate from './components/Certificate';
import Myimg from './img/my-img.webp';
// import certficate image
import webResponsive from './img/web-responsive-certi.webp';
import frontEnd from './img/front-end-certi.webp';
import javaScript from './img/javascript-certi.webp';
import phpCerti from './img/php-certi.webp';
import sqlCerti from './img/sql-certi.webp';
import jqueryCerti from './img/jquery-certi.webp';

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
      <section>
        <Certificate
        webResponsive={webResponsive}
        frontEnd={frontEnd}
        javaScript={javaScript}
        certiPHP={phpCerti}
        certiSQL={sqlCerti}
        jqueryCerti={jqueryCerti}
        />
      </section>
    </div>
  );
}

export default App;

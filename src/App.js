import React from 'react';
// import stylesheet
import './style/App.scss';
import './style/Responsive.scss';
// import component
import  Navbar  from './components/Navbar';
import Introduction  from './components/Introduction';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Footer from './components/Footer';
// import image
import Myimg from './img/my-img.webp';
import htmlLogo from './img/html.png';
import cssLogo from './img/css-3.png';
import javascriptLogo from './img/javascript.png';
import reactjsLogo from './img/react-js.png';
import bootstrapLogo from './img/bootstrap.png';
import sassLogo from './img/sass.png';
import jqueryLogo from './img/jquery.png';
import phpLogo from './img/php.png';
import mysqlLogo from './img/mysql.png';
import wordpressLogo from './img/wordpress.png';
import githubLogo from './img/github.png';
import blogWeb from './img/blogWebsite.webp';
import bmsWeb from './img/bmsWeb.webp';
import digitalClock from './img/digitalClock.webp';
import schoolWebsite from './img/schoolWebsite.webp';
import randomQuote from './img/randomQuote.webp';
import cashierWeb from './img/cashierWeb.webp';

// Main component
function App() {
  return (
    <div>
      <header id="header-section">
        <Navbar/>
        <Introduction/>
      </header>
      <section id="about-me">
        <AboutMe 
        img={Myimg}
        htmlLogo = {htmlLogo}
        cssLogo = {cssLogo}
        javascriptLogo = {javascriptLogo}
        reactjsLogo = {reactjsLogo}
        bootstrapLogo = {bootstrapLogo}
        sassLogo = {sassLogo}
        jqueryLogo = {jqueryLogo}
        phpLogo = {phpLogo}
        mysqlLogo = {mysqlLogo}
        wordpressLogo = {wordpressLogo}
        githubLogo = {githubLogo}
        />
      </section>
      <section id="projects">
        <Project        
        blogWeb = {blogWeb}
        bmsWeb = {bmsWeb}
        digitalClock = {digitalClock}
        schoolWebsite = {schoolWebsite}
        randomQuote = {randomQuote}
        cashierWeb = {cashierWeb}
        />
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;

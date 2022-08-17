import './style/App.scss';
import React from 'react';
// import component
import  Navbar  from './components/Navbar';
import  Introduction  from './components/Introduction';
import AboutMe from './components/AboutMe';

// Main component
function App() {
  return (
    <div>
      <header id="header-section">
        <Navbar/>
        <Introduction/>
      </header>
      <section>
        <AboutMe/>
      </section>
    </div>
  );
}

export default App;

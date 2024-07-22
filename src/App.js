import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Employees from './components/Employees';
import Services from './components/Services';
import Contact from './components/Contact';
import Slider from './components/Slider';

import 'swiper/swiper-bundle.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Employees />
        <Services />
        <Slider />
      </main>
      <Contact />
    </div>
  );
}

export default App;
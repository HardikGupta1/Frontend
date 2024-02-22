// src/App.js

import React from 'react';
import HeroSection from './Components/HeroSection';
import OfferSection from './Components/OfferSection';
import ConnectSection from './Components/ConnectSection';
import FooterSection from './Components/FooterSection';
import './App.css';
import BlogSection from './Components/BlogSection'

function App() {
  return (
    <div className="App">
      <HeroSection />
      <OfferSection />
      <BlogSection/>
      <ConnectSection />
      <FooterSection />
      
    </div>
  );
}

export default App;

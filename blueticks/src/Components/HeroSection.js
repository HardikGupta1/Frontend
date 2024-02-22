import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
        <div className="image-content">
          <img src="https://generative-ai.bluetickconsultants.com/images/bluetick-consultants.png" width="140" height="37" alt="Bluetick Consultants Logo" />
      <img
        src="https://generative-ai.bluetickconsultants.com/images/products/generativeAI.png"
        alt="New Image"
        className="new-image"
      />
</div>
          <div className="text-content">
            <h2>Welcome to Bluetick Consultants</h2>
            <p>A technology-driven firm making a significant impact in the startup ecosystems.</p>
            <p className="transformative-text">
              TRANSFORMING ENTERPRISES 
              <span>with cutting-edge, scalable, privacy-focused Generative AI
              Solutions.</span><br/>  <p class="founded-text">Founded in 2017, Bluetick Consultants is a technology-driven firm that has
              made a significant impact in the Indian and US startup ecosystems.</p>
            </p>
            <a
              href="https://www.bluetickconsultants.com/generative-ai.html"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Discover More
            </a>
          </div>
  
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



import React from 'react';
import './FooterSection.css';
import Facebook from './images/facebook.png'
import Instagram from './images/instagram.png'
import twitter from './images/twitter.png'
import Linkedln from './images/linkedln.png'
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content" style = {{maxWidth:'1700px'}}>
        <div className="footer-logo">
          <img src="https://generative-ai.bluetickconsultants.com/images/bluetick-consultants.png" width="140" height="37" alt="Bluetick Consultants Logo" />
          <div className="footer-info">
          <p>Bluetick Consultants LLP</p>
          <br/><br/>
          <p id="email">contact@bluetickconsultants.com</p>
          <br/>
        </div>
        <div className="footer-links">
        <img src="https://generative-ai.bluetickconsultants.com/images/glassdoor-rating.webp" width="130" height="40" alt="Bluetick Consultants Logo" style={{ marginLeft: '80px',marginRight: '10px', padding: '5px' }} />

        <img src="https://generative-ai.bluetickconsultants.com/images/bluetick-iso.webp" width="130" height="90" alt="Bluetick Consultants Logo" style={{ marginRight: '10px', padding: '5px' }} />

        </div>
       
        </div>
        
        
        
        <div className="footer-resources">
        <p>RESOURCES</p>
        <div className="resources-links">
        
            <a href="#"><div class="arrow-icon"></div>Blogs</a>
        </div>
        </div>

        <div className="footer-products">
        <p>PRODUCTS</p>
        <div className="products-links">
            <a href="#"><div class="arrow-icon"></div>Talk To Code</a>
            <a href="#"><div class="arrow-icon"></div>InterviewGPT</a>
            <a href="#"><div class="arrow-icon"></div>PrivacyDoc</a>
            <a href="#"><div class="arrow-icon"></div>Sales Call Evaluator</a>
        </div>
        </div>
<br/>
        {/* <div className="footer-social">
          <a href="https://www.threads.net/@bluetickconsultants">https://www.threads.net/@bluetickconsultants</a>
        </div> */}
      </div>

<div className="footer-social">
    <a href="https://www.facebook.com/bluetickconsultants/" title="Facebook" target="_blank" rel="noopener">
    <img src={Facebook} alt="Facebook" className="social-icons" />
    </a>
    <a href="https://www.instagram.com/bluetickconsultants/" title="Instagram" target="_blank" rel="noopener">
    <img src={Instagram} alt="Facebook" className="social-icons" />
    </a>
    <a href="https://www.linkedin.com/company/bluetickconsultants/" title="LinkedIn" target="_blank" rel="noopener">
    <img src={Linkedln} alt="Facebook" className="social-icons" />
    </a>
    <a href="https://twitter.com/bluetickconsult" title="Twitter" target="_blank" rel="noopener">
    <img src={twitter} alt="Facebook" className="social-icons" />
    </a>
</div>

      <div className="footer-copyright">
        <p> 2024 &copy;All rights reserved by Bluetick Consultants LLP</p>
      </div>
    </footer>
  );
};

export default Footer;

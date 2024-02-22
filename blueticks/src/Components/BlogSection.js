// BlogSection.js

import React, { useState, useEffect } from 'react';
import './BlogSection.css';

const BlogSection = () => {
  const [sliderPosition, setSliderPosition] = useState(0);

  const redirectToBlog = (url) => {
    window.location.href = url;
  };

  const rotateSlider = (direction) => {
    const cardWidth = 100; // Assuming each blog card has a fixed width
    const totalWidth = 400; // Assuming the total width of all blog cards

    if (direction === 'left') {
      setSliderPosition((prevPosition) => (prevPosition - cardWidth + totalWidth) % totalWidth);
    } else if (direction === 'right') {
      setSliderPosition((prevPosition) => (prevPosition + cardWidth) % totalWidth);
    }
  };

  useEffect(() => {
    // Automatically rotate the slider after 10 seconds
    const intervalId = setInterval(() => rotateSlider('right'), 3000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="blogs-section" className="blogs-section">
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      <div className="blogs-heading-container">
      <h2 className="blogs-heading">Blogs</h2>
      </div> 
        <br/>
        <div className="blog-slider-container">
          <div className="blog-slider" style={{ transform: `translateX(-${sliderPosition}%)` }}>
            <div className="blog-card" onClick={() => redirectToBlog('https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-dialogues.html')}>
              <h3>Speaking SQL: Turning Natural Language into Database Dialogues</h3>
              <p>Bridging Language and Data in the Enterprise Sphere: In the realm of enterprise data
            management, SQL databases have long stood as the backbone, housing vast quantities of
            invaluable information. As enterprises increasingly lean on business intelligence (BI) tools to
            extract insights from these data repositories, the quest for more intuitive and accessible
            querying methods gains momentum. The emerging solution? Leveraging Large Language
            Models (LLMs) to interact with SQL databases using natural language.</p>
              <a href="https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-dialogues.html" className="read-more">Read More -&gt;</a>
            </div>
            <div className="blog-card" onClick={() => redirectToBlog('https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learningfrom-human-feedback.html')}>
              <h3>Beyond Basics: Elevating AI with Reinforcement Learning from Human Feedback</h3>
              <p>Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the
            success of ChatGPT, marking a significant advancement in AI's ability to understand and
            engage in human language. This method, vital for fine-tuning language models, addresses
            the complexities and nuances of communication, ensuring AI interactions are natural and
            intuitive. It navigates the challenges of training AI with diverse internet data, carefully guiding
            models to avoid replicating inappropriate language or tones.</p>
              <a href="https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learningfrom-human-feedback.html" className="read-more">Read More -&gt;</a>
            </div>
            <div className="blog-card" onClick={() => redirectToBlog('https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html')}>
              <h3>The Fine Art of Tuning: Parameter-Efficient Fine-Tuning</h3>
              <p>Welcome to our exploration of the fascinating world of large language models! As many of
            you are aware, the scale of these models has skyrocketed recently. Take, for instance,
            GPT-4, which boasts a staggering 1.8 trillion parameters. The desire to fine-tune these
            behemoths with custom datasets is growing, yet it poses significant challenges. Fine-tuning
            requires adjusting countless parameters, which is time-consuming, and the GPU demands
            are nothing short of immense.</p>
              <a href="https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html" className="read-more">Read More -&gt;</a>
            </div>
            <div className="blog-card" onClick={() => redirectToBlog('https://www.bluetickconsultants.com/privaicy-matters-balancing-privacy-price-and-performance-in-in-house-llm-deployments.html')}>
              <h3>PrivAIcy Matters: Balancing Privacy, Price, and Performance</h3>
              <p>Welcome to the enthralling universe of Generative AI! Recognized as a realm of artificial
            intelligence algorithms with the magic to conjure fresh content based on available data, this
            technology has unassumingly become the new frontier for a plethora of industries, 
           including tech, banking, and media. And, no surprises here, the technological world has 
         openly
 embraced it in myriad innovative ways.</p>
              <a href="https://www.bluetickconsultants.com/privaicy-matters-balancing-privacy-price-and-performance-in-in-house-llm-deployments.html" className="read-more">Read More -&gt;</a>
            </div>
          </div>
          
        </div>
        <div className="arrow left" onClick={() => rotateSlider('left')}> <div className="arrow-circle">&lt;</div></div>
          <div className="arrow right" onClick={() => rotateSlider('right')}> <div className="arrow-circle">&gt;</div></div>
      </div>
      
    </section>
  );
};

export default BlogSection;

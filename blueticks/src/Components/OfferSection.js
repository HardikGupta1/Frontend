// src/Components/OfferSection.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake,faBuilding,faCogs,faLevelUp} from '@fortawesome/free-solid-svg-icons';
import './OfferSection.css';


const OfferSection = () => {
  return (
    <div className="offer-section">
      <div className="container" style={{ maxWidth: '1500px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <div className="offer-content">
          <h2>What We Offer</h2>
          <div className="card-container">
            <div className="card">
            <FontAwesomeIcon icon={faBuilding} size="3x"/>
              <h3>Explore AI Opportunities for Your Enterprise</h3>
              <p>Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation.</p>
            </div>
            <div className="card">
            <FontAwesomeIcon icon={faHandshake} size="3x"/>
              <h3>Design AI Trust Layer</h3>
              <p>Prioritize data security and build trust in generative AI applications with a dedicated trust layer, emphasizing privacy-focused solutions that safeguard both organizational and customer data.</p>
            </div>
            <div className="card">
            <FontAwesomeIcon icon={faCogs} size="3x"/>
              <h3>Scalability-Focused Solutions</h3>
              <p>Streamline and optimize business processes with comprehensive workflow automation, ensuring seamless integration of AI technologies from inception to execution for increased efficiency and productivity.</p>
            </div>
            <div className="card">
            <FontAwesomeIcon icon={faLevelUp} size="3x"/>
              <h3>End-to-end Workflow Automation</h3>
              <p>Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs but also adapt and grow with the evolving demands of your enterprise, providing a future-proof approach to AI integration.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferSection;

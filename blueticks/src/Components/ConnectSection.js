// ConnectSection.js

import React, { useState } from 'react';
import './ConnectSection.css';

const ConnectSection = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [contactNumberError, setContactNumberError] = useState('');

  const submitForm = (event) => {
    event.preventDefault();

    // Validate mobile number input
    if (!/^[0-9]+$/.test(contactNumber)) {
      setContactNumberError('Please enter numbers only.');
      return;
    } else {
      setContactNumberError(''); // Clear error message if valid
    }

    // Perform other form validation here

    // Perform actions with form data
    console.log('Form submitted:', { fullName, email, contactNumber, subject, message });

    // Reset the form
    setFullName('');
    setEmail('');
    setContactNumber('');
    setSubject('');
    setMessage('');

    const form = document.getElementById('contact-form');
    if (form.checkValidity()) {
      alert('Thank you for writing to us. We value your feedback.');
      form.reset();
    } else {
      form.reportValidity();
    }
  
  };

  return (
    <section id="connect-section" className="connect-section">
     <div className="container" style={{ maxWidth: '1500px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>

        <div className="connect-content">
            
          <h2><span className="connect-title">LET'S CONNECT</span></h2>
          <p style={{
            marginTop: '1.5%',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '24px',
            lineHeight: '29px',
            color: '#696969'
            }}>Contact our support team or make an appointment with our experts.</p>
          <br/>
          <form id="contact-form" className="contact-form" onSubmit={submitForm}>
            <div className="form-group subject-form-group2">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            </div>
            <div className="form-group subject-form-group2">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group subject-form-group2">
              <label htmlFor="contactNumber">Contact Number</label>
              <input type="tel" id="contactNumber" name="contactNumber" pattern="[0-9]+" title="Please enter numbers only" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
              <p id="contactNumberError" className="error-message">{contactNumberError}</p>
            </div>
            <div className="form-group subject-form-group4">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
            </div>
            <div className="form-group subject-form-group3">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            </div>
            <button type="submit" className="submit-button">Submit Form</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;

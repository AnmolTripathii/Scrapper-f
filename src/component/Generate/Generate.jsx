import React from 'react';
import './Generate.css';

function Generate({ generatedObj }) {
  // Destructure the generatedObj and provide default values for missing data
  const {
    name = "Not Available",
    description = "Not Available",
    logo = "Not Available",
    facebook = "Not Available",
    linkedin = "Not Available",
    twitter = "Not Available",
    instagram = "Not Available",
    address = "Not Available",
    phone = "Not Available",
    email = "Not Available",
    screenshot = "Not Available",
  } = generatedObj;

  return (
    <div className="generate-container">
      <div className='sub-container1'><div className="header">
        <img src={logo} alt={name} className="logo" />
        <h1>{name}</h1>
      </div>
      <div className="contact-info">
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
      </div></div>
      <div className='sub-container'><div className="company-details">
        <h2>Company Details</h2>
        <p><strong>Website:</strong> {name}</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
        <p><strong>Facebook:</strong> <a href={facebook} target="_blank" rel="noopener noreferrer">{facebook}</a></p>
        <p><strong>Instagram:</strong> <a href={instagram} target="_blank" rel="noopener noreferrer">{instagram}</a></p>
        <p><strong>Twitter:</strong> <a href={twitter} target="_blank" rel="noopener noreferrer">{twitter}</a></p>
        <p><strong>LinkedIn:</strong> <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a></p>
        <p><strong>Address:</strong> {address}</p>
      </div>
      <div className="screenshot-section">
        <h2>Screenshot of Webpage</h2>
        <img src={screenshot} alt="Webpage Screenshot" className="screenshot" />
      </div></div>
    </div>
  );
}

export default Generate;

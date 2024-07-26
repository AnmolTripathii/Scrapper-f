import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import axios from 'axios';

function SearchBar() {
  const [url, setUrl] = useState('');
  const [popupMessage, setPopupMessage] = useState('');

  const handleInputChange = (e) => {
    setUrl(e.target.value.trim());
  };

  const fetchDetails = async () => {
    if (!url) {
      setPopupMessage('Please enter a valid URL.');
      return;
    }

    try {
      const response = await axios.post('https://scrapper-back-pied.vercel.app/api/v1/webs/generate', { url });
      setPopupMessage(response.data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
      setPopupMessage('Error fetching data');
    }
  };

  useEffect(() => {
    if (url) {
      fetchDetails();
    }
  }, [url]);

  useEffect(() => {
    if (popupMessage) {
      const timer = setTimeout(() => {
        setPopupMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [popupMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDetails();
  };

  return (
    <div className='searchBar'>
      {popupMessage && <div className='popup'>{popupMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className='container'>
          <svg viewBox="0 0 512 512" className="searchIcon">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
          </svg>
          <input
            type='text'
            name='url'
            placeholder='Enter domain name'
            value={url}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type='submit' className='Search_btn'>Fetch & Save Details</button>
      </form>
    </div>
  );
}

export default SearchBar;

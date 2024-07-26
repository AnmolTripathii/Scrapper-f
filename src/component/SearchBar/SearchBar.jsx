import React, { useRef, useState, useEffect } from 'react';
import './SearchBar.css';
import axios from 'axios';

function SearchBar() {
  const inputRef = useRef();
  const [popupMessage, setPopupMessage] = useState('');

  const SearchUrl = async (e) => {
    e.preventDefault();
    const url = inputRef.current.value.trim();
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
    e.target.reset();
  };

  useEffect(() => {
    if (popupMessage) {
      const timer = setTimeout(() => {
        setPopupMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [popupMessage]);

  return (
    <div className='searchBar'>
      {popupMessage && <div className='popup'>{popupMessage}</div>}
      <form onSubmit={SearchUrl}>
        <div className='container'>
          <svg viewBox="0 0 512 512" className="searchIcon">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
          </svg>
          <input
            type='text'
            name='url'
            placeholder='Enter domain name'
            ref={inputRef}
            
          />
        </div>
        <button type='submit' className='Search_btn'>Fetch & Save Details</button>
      </form>
    </div>
  );
}

export default SearchBar;

import React, { useContext, useEffect, useState } from 'react';
import './SearchControl.css';
import { WebContext } from '../../context/Context';
import axios from 'axios';

function SearchControl() {
  const { selectedLen, selectIds } = useContext(WebContext);
  const [popupMessage, setPopupMessage] = useState('');

  const deletegen = async () => {
    try {
      const response = await axios.post('https://scrapper-back-pied.vercel.app/api/v1/webs/delete', {
        ids: selectIds
      });
      setPopupMessage(response.data.message);
      console.log(response)
    } catch (error) {
      console.error('Error deleting data:', error);
      setPopupMessage('Error deleting data');
    }
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
    <div className="search-control">
      {popupMessage && <div className='popup'>{popupMessage}</div>}
      <div className="selection-info">Selected Generates: {selectedLen}</div>
      <div className="action-buttons">
        <button className="action-button delete" onClick={deletegen}>Delete</button>
        <button className="action-button export">Export as CSV</button>
      </div>
    </div>
  );
}

export default SearchControl;

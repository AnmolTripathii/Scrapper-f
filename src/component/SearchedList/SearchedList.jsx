import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

import './SearchedList.css';
import { WebContext } from '../../context/Context';

const SearchedList = ({ entries }) => {
    const { setSelectedLen, selectedLen, selectIds, setSelectIds } = useContext(WebContext);
    const [selectedIds, setSelectedIds] = useState([]);

    const [allSelected, setAllSelected] = useState(false);

    useEffect(() => {
        setAllSelected(selectedIds.length === entries.length);
        setSelectedLen(selectedIds.length);
        setSelectIds(selectedIds); // Sync selectedIds with selectIds in WebContext
    }, [selectedIds, entries, setSelectedLen, setSelectIds]);

    const handlePrimeCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        setAllSelected(isChecked);
        if (isChecked) {
            setSelectedIds(entries.map(entry => entry._id));
        } else {
            setSelectedIds([]);
        }
    };

    const handleCheckboxChange = (id) => {
        setSelectedIds((prevSelectedIds) => {
            const newSelectedIds = prevSelectedIds.includes(id)
                ? prevSelectedIds.filter(selectedId => selectedId !== id)
                : [...prevSelectedIds, id];
            return newSelectedIds;
        });
    };

    const shortenDescription = (description, maxLength) => {
        return description.length <= maxLength ? description : `${description.slice(0, maxLength)}...`;
    };

    return (
        <div className="table-container">
            <div className="table-header">
                <div className="table-row">
                    <div className="table-cell prime_checkbox">
                        <input
                            type="checkbox"
                            checked={allSelected}
                            onChange={handlePrimeCheckboxChange}
                        />
                    </div>
                    <div className="table-cell">COMPANY</div>
                    <div className="table-cell">SOCIAL PROFILES</div>
                    <div className="table-cell">DESCRIPTION</div>
                    <div className="table-cell">ADDRESS</div>
                    <div className="table-cell">PHONE NO.</div>
                    <div className="table-cell">EMAIL</div>
                </div>
            </div>
            <div className="table-body">
                {entries.map((entry) => (
                    <div className="table-row" key={entry._id}>
                        <div className="table-cell">
                            <input
                                type="checkbox"
                                checked={selectedIds.includes(entry._id)}
                                onChange={() => handleCheckboxChange(entry._id)}
                            />
                        </div>
                        <div className="table-cell">
                            <Link to={`/product/${entry._id}`}>
                                <div className='link'>
                                    <img src={entry.logo} alt={entry.company} width="50" />
                                    <span>{shortenDescription(entry.name, 22)}</span>
                                </div>
                            </Link>
                        </div>
                        <div className="table-cell links">
                            <a href={entry.facebook}><FaFacebook /></a>
                            <a href={entry.twitter}><FaTwitter /></a>
                            <a href={entry.linkedin}><FaLinkedin /></a>
                        </div>
                        <div className="table-cell">{shortenDescription(entry.description, 30)}</div>
                        <div className="table-cell">{entry.address}</div>
                        <div className="table-cell">{entry.phone}</div>
                        <div className="table-cell"><a href={`mailto:${entry.email}`}>{entry.email}</a></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchedList;

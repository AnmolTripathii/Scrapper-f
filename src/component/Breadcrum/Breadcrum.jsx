// Breadcrumbs.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Breadcrum.css"

const Breadcrumb = ({ generatedObj }) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    const {name}=generatedObj;
    const shorten = (description, maxLength) => {
        if (description.length <= maxLength) {
          return description;
        }
        return description.slice(0, maxLength) + '...';
      };
    return (
        <nav>
            <ol className="breadcrumb">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li >
                    {shorten(name,10)}
                </li>

            </ol>
        </nav>
    );
};

export default Breadcrumb;

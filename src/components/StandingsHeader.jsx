import React from 'react';
import { Link } from 'react-router-dom';

const StandingsHeader = () => (
  <header className="header">
    <Link to="/" className="back-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 back">
        <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
      </svg>

    </Link>
  </header>
);
export default StandingsHeader;

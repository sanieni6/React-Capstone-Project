/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const HeaderList = ({ year, handleClick }) => (
  <li key={year}>

    <button
      onClick={() => handleClick(year)}
      onKeyDown={() => handleClick(year)}
      key={year}
      type="button"
      className="tags-btn"
    >
      {year}
    </button>

  </li>
);

HeaderList.propTypes = {
  year: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default HeaderList;

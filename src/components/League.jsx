import React from 'react';
import PropTypes from 'prop-types';

const League = ({
  id, logos, name, handleClick,
}) => (

  <li key={id} className="league">
    <button className="league-btn" onClick={() => handleClick(id)} key={id} type="button">
      <img className="league-logo" src={logos.light} alt={name} />
      <p className="league-name">{name}</p>

    </button>

  </li>
);

League.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  logos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default League;

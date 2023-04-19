import React from 'react';
import PropTypes from 'prop-types';

const Team = ({ team, stats, getLogo }) => (
  <li className="stand" key={team.id}>
    {getLogo(team)}
    <div className="second-container">
      <p className="name">{team.name}</p>
      <div className="stats">
        <p className="points">
          Points:
          {stats[2].value}
        </p>
        <p className="wins">
          Wins:
          {stats[6].value}
        </p>
        <p className="losses">
          Losses:
          {stats[1].value}
        </p>

      </div>

    </div>

  </li>
);

Team.propTypes = {
  team: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  stats: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  getLogo: PropTypes.func.isRequired,
};

export default Team;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getStandings } from '../redux/standings/standingsSlice';
import StandingsHeader from './StandingsHeader';

const Standings = ({ leagueId }) => {
  const { seasonId, standings } = useSelector((store) => store.standings);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStandings({ seasonId, leagueId }));
  }, [dispatch, seasonId, leagueId]);

  const stands = standings.map((team) => (
    <li className="stand" key={team.team.id}>
      <img className="stand-logo" src={team.team.logos[0].href} alt={team.team.name} />
      <div className="second-container">
        <p className="name">{team.team.name}</p>
        <div className="stats">
          <p className="points">
            Points:
            {team.stats[2].value}
          </p>
          <p className="wins">
            Wins:
            {team.stats[6].value}
          </p>
          <p className="losses">
            Losses:
            {team.stats[1].value}
          </p>

        </div>

      </div>

    </li>
  ));

  return (
    <>
      <StandingsHeader />
      <div>
        <ul className="standings">
          {stands}
        </ul>
      </div>

    </>

  );
};

Standings.propTypes = {
  leagueId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Standings;

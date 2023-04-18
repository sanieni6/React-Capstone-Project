import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getStandings } from '../redux/standings/standingsSlice';
import StandingsHeader from './StandingsHeader';
import nodata from '../images/nodata.png';

const Standings = ({ leagueId }) => {
  const {
    seasonId, standings, isLoading, error,
  } = useSelector((store) => store.standings);
  const { leagues } = useSelector((store) => store.leagues);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStandings({ seasonId, leagueId }));
  }, [dispatch, seasonId, leagueId]);

  const getLogo = (team) => {
    if (team.team.logos && team.team.logos.length > 0) {
      return <img className="stand-logo" src={team.team.logos[0].href} alt={team.team.name} />;
    }
    return <img className="stand-logo" src={nodata} alt={team.team.name} />;
  };

  const getCurrentLeagueLogo = () => {
    const currentLeague = leagues.find((league) => league.id === leagueId);
    if (currentLeague) {
      return <img className="main-image" src={currentLeague.logos.light} alt={currentLeague.name} />;
    }
    return <img className="main-image" src={nodata} alt="No data" />;
  };

  const stands = standings.map((team) => (
    <li className="stand" key={team.team.id}>
      {getLogo(team)}
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
        {getCurrentLeagueLogo()}
        <p className="text-divider">Standings</p>
        {isLoading && <p className="loading">Loading...</p>}
        {error && <p className="loading">{error}</p>}
        {standings.length > 0 && (
          <ul className="standings">
            {stands}
          </ul>

        )}

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

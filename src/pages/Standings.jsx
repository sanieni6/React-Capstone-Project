import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getStandings } from '../redux/standings/standingsSlice';
import StandingsHeader from '../components/StandingsHeader';
import nodata from '../images/nodata.png';
import Team from '../components/Team';

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
    if (team.logos && team.logos.length > 0) {
      return <img className="stand-logo" src={team.logos[0].href} alt={team.name} />;
    }
    return <img className="stand-logo" src={nodata} alt={team.name} />;
  };

  const getCurrentLeagueLogo = () => {
    const currentLeague = leagues.find((league) => league.id === leagueId);
    if (currentLeague) {
      return <img className="main-image" src={currentLeague.logos.light} alt={currentLeague.name} />;
    }
    return <img className="main-image" src={nodata} alt="No data" />;
  };

  const stands = standings.map((team) => (
    <Team key={team.team.id} team={team.team} stats={team.stats} getLogo={getLogo} />
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

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getLeagues } from '../redux/leagues/soccerSlice';
import { setLeagueId, clear } from '../redux/standings/standingsSlice';
import Header from './Header';
import main from '../images/leagues.png';
import League from '../components/League';

const Leagues = ({ leagues, isLoading, error }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!leagues.length) {
      dispatch(getLeagues());
    }
    dispatch(clear());
  }, [dispatch, leagues]);

  const handleClick = (id) => {
    dispatch(setLeagueId(id));
    navigate(`/standings/${id}`);
  };
  return (
    <>
      <Header />
      <div>
        <img className="main-image" src={main} alt="leagues" />
        <p className="text-divider">Most important leagues on the world</p>
        {isLoading && <p className="loading">Loading...</p>}
        {error && <p className="loading">{error}</p>}
        {leagues.length > 0 && (
          <ul className="leagues">
            {leagues.map((league) => (
              <League
                key={league.id}
                id={league.id}
                logos={league.logos}
                name={league.name}
                handleClick={handleClick}
              />
            ))}

          </ul>

        )}

      </div>

    </>
  );
};

Leagues.propTypes = {
  leagues: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default Leagues;

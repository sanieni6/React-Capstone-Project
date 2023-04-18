import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLeagues } from '../redux/leagues/soccerSlice';
import { setLeagueId, clear } from '../redux/standings/standingsSlice';
import Header from './Header';
import main from '../images/leagues.png';

const Leagues = () => {
  const { leagues, isLoadind, error } = useSelector((store) => store.leagues);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getLeagues());
    dispatch(clear());
  }, [dispatch]);

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
        {isLoadind && <p className="loading">Loading...</p>}
        {error && <p className="loading">{error}</p>}
        {leagues.length > 0 && (
          <ul className="leagues">
            {leagues.map((league) => (
              <li key={league.id} className="league">
                <button className="league-btn" onClick={() => handleClick(league.id)} key={league.id} type="button">
                  <img className="league-logo" src={league.logos.light} alt={league.name} />
                  <p className="league-name">{league.name}</p>

                </button>

              </li>
            ))}

          </ul>

        )}

      </div>

    </>
  );
};

export default Leagues;

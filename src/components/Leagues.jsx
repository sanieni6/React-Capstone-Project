/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLeagues } from '../redux/leagues/soccerSlice';
import { setLeagueId } from '../redux/standings/standingsSlice';
import Header from './Header';

const Leagues = () => {
  const { leagues } = useSelector((store) => store.leagues);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getLeagues());
  }, [dispatch]);

  const handleClick = (id) => {
    dispatch(setLeagueId(id));
    navigate(`/standings/${id}`);
  };
  return (
    <>
      <Header />
      <div>
        <ul className="leagues">
          {leagues.map((league) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li className="league" onClick={() => handleClick(league.id)} key={league.id}>
              <img className="league-logo" src={league.logos.light} alt={league.name} />
              <p className="league-name">{league.name}</p>
            </li>
          ))}

        </ul>
      </div>

    </>
  );
};

export default Leagues;

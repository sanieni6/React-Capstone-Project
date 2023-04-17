import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLeagues } from '../redux/leagues/soccerSlice';

const Leagues = () => {
  const { leagues } = useSelector((store) => store.leagues);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLeagues());
  }, [dispatch]);
  return (
    <div>
      <ul>
        {leagues.map((league) => (
          <li key={league.id}>{league.name}</li>
        ))}

      </ul>
    </div>
  );
};

export default Leagues;

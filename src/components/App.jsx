import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/App.scss';
import Leagues from '../pages/Leagues';
import Standings from '../pages/Standings';

function App() {
  const { leagueId } = useSelector((store) => store.standings);
  const { leagues, isLoading, error } = useSelector((store) => store.leagues);
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Leagues leagues={leagues} isLoading={isLoading} error={error} />} />
          <Route path="/standings/:id" element={<Standings leagueId={leagueId} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

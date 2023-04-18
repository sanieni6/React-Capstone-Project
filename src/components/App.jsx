import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/App.scss';
import Leagues from './Leagues';
import Standings from './Standings';

function App() {
  const { leagueId } = useSelector((store) => store.standings);
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Leagues />} />
          <Route path="/standings/:id" element={<Standings leagueId={leagueId} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

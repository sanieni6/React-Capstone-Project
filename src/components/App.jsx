import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
import Header from './Header';
import '../styles/App.css';
import Leagues from './Leagues';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Leagues />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

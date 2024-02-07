import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AllPlayersPage from './pages/AllPlayersPage'; 
import Rank90Page from './pages/Rank90Page'; 
import Rank85Page from './pages/Rank85Page'; 
import Rank80Page from './pages/Rank80Page'; 
import Rank75Page from './pages/Rank75Page'; 
import SearchResults from './components/SearchResults';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
        <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/" element={<AllPlayersPage />} />
          <Route path="/rank/75" element={<Rank75Page />} />
          <Route path="/rank/80" element={<Rank80Page />} />
          <Route path="/rank/85" element={<Rank85Page />} />
          <Route path="/rank/90" element={<Rank90Page />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

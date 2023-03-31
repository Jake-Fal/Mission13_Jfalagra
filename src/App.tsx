import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MovieList from './Movies';
import Home from './Home';
import Podcast from './Podcast';
import NavBar from './Layout';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Podcast" element={<Podcast />} />
        <Route path="/Movies" element={<MovieList />} />
      </Routes>
    </div>
  );
}

export default App;

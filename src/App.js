import React from 'react';
import { Routes, Route } from "react-router-dom";

import Homepage from './pages/HomePage';
//import Navbar from './components/Navbar.jsx'
import AllBeers from './pages/AllBeers.jsx'
import RandomBeer from './pages/RandomBeer.jsx'
import BeerDetails from './pages/BeerDetails.jsx'
import AddNewBeer from './pages/AddNewBeer.jsx'

import './App.css';

function App() {
  
  return (
    <div className="App">
    
    <Routes >
    <Route exact path="/" element={<Homepage />}/>
    <Route exact path="/beers" element={<AllBeers />}/>
    <Route exact path='/:id' element={<BeerDetails />}/>
    <Route exact path="/random-beer" element={<RandomBeer />}/>
    <Route exact path="/new-beer" element={<AddNewBeer />}/>
    <Route exact path="/search?q=:query"/>
    </Routes>

    </div>
  );
}

export default App;

import React from 'react';
import { Link } from "react-router-dom";

import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';



export default function Homepage (){
    return(

         <div>
            <Link to="/beers" >
                <img src={beers} alt="imageTitle" />
                <h1>All Beers</h1>
            </Link>
            <Link to="/random-beer" >
                <img src={newBeer} alt="" />
                <h1>Random Beer</h1>
            </Link>
            <Link to="/new-beer">
                <img src={randomBeer} alt="" />
                <h1>New Beer</h1>
            </Link>
        </div>

    )
}
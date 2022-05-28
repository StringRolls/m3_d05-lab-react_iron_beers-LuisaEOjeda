
import { React, useEffect, useState } from "react";
import Navbar from '../components/Navbar.jsx'

import axios from "axios";


export default function RandomBeer (){

    const [beers, setBeers] = useState({});

    useEffect(() =>{
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then((response) => setBeers(response.data))
        .catch((error) => console.log("Unable to get random beer: ", error))
    }, [beers.id])

    return beers._id ? (
        <div>
            <Navbar />
            <div>
                <div className=''>
                    <img src={beers.image_url} alt='' style={{'height':'250px'}}/>
                </div>
                <hr/>
                <div className=''>
                    <div className=''>
                        <h1>{beers.name}</h1>
                        <h1>{beers.attenuation_level}</h1>      
                    </div>
                    <div className=''>
                        <h3>{beers.tagline}</h3>
                        <h3>{beers.first_brewed}</h3>
                    </div>
                </div>
                    <p>{beers.description}</p>
                    <p>{beers.contributed_by}</p>
                <div>

                </div>
            </div>
        </div>
    ) : (
        <div>
            <Navbar />
            <h1>Loading a random beer...</h1>
        </div>
    )
}
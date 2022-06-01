import { React, useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import Navbar from '../components/Navbar.jsx'

import axios from "axios";

export default function BeerDetails() {
    const [beer, setBeer] = useState({});
    const params = useParams(); 

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
            .then((response) => setBeer(response.data))
            .catch((error) => console.log("Unable to get the details of the beer: ", error));
    }, [params.id]);

    return params.id ? (
        <>
        <div>
            <Navbar />
        </div>
        <div>
            <div key={beer._id} className="">
                <img src={beer.image_url} height={300}alt="beer" />
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
            </div>
        </div>    
        </>
    ) : (
        <div>Loading the details of your chose beer...</div>
    );
}

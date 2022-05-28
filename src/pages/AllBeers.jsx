import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar.jsx'

import axios from "axios";

export default function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
    .get("https://ih-beers-api2.herokuapp.com/beers")
    .then((response) => setBeers(response.data))
    .catch((error) => console.log("Unable to list all beers: ", error))
  }, []);

  return (
    <div>
           <Navbar />
   
      <h3>List of all Beers</h3>
<div>
      {beers.map((beer) => {
        return (
          <div key={beer._id} className="">
            <Link to={`/${beer._id}`}> <h3>{beer.name}</h3></Link>
            <div>
              <img height={200} src={beer.image_url} alt="" />
            </div>
            <div>
              <p>{beer.tagline}</p>
            </div>
            <div>
              <p>Contributed by: {beer.contributed_by}</p>
            </div>
            <hr></hr>
          </div>
        );
      })}
    </div>
</div>
  );
}

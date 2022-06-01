import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import axios from 'axios';

export default function NewBeerPage(){

    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post(
            `https://ih-beers-api2.herokuapp.com/beers/new`,
            formData
        )
        .then((newData) => navigate(`/`))
        .catch((error) => console.log("Unable to create beer: ", error));
    };

    function handleChange(event){
        const inputName = event.target.name;
        const value = event.target.value;

        setFormData((formData) => {
            return {...formData, [inputName]: value};
        });
    }

    return (
        <div>
            <Navbar />
            <div className="">
                <form onSubmit={handleSubmit}>
                    <div className="">
                        <label>Name:</label>
                        <input type='text' name='name' onChange={handleChange} />
                    </div>

                    <div className="">
                        <label>Tagline:</label>
                        <input type='text' name='tagline' onChange={handleChange} />
                    </div>

                    <div className="">
                        <label>Description:</label>
                        <input type='textarea' name='description' onChange={handleChange} />
                    </div>

                    <div className="">
                        <label>First brewed:</label>
                        <input type='text' name='first_brewed' onChange={handleChange} />
                    </div>

                    <div className="">
                        <label>Brewer tips:</label>
                        <input type='text' name='brewer_tips' onChange={handleChange} />
                    </div>

                    <div className="">
                        <label>Attenuation level:</label>
                        <input type='number' name='attenuation_level' onChange={handleChange} />
                    </div>

                    <div className="">
                        <label>Created by:</label>
                        <input type='text' name='contributed_by' onChange={handleChange} />
                    </div>

                    <button type='submit'>Create</button>
                </form>
            </div>
        </div>
    );
}
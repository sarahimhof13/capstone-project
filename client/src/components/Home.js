import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Home = () => {
    const [planet, setPlanet] = useState([]);

    // Async function to get all planets from database
    useEffect(() => {
        async function getPlanet() {
            try {
                const response = await axios.get("/planets");
                setPlanet(response.data);
            } catch (error) {
                console.log("error", error);
            }
        }
        getPlanet();
    }, []);

    return (
        <div className="home-container">
            <h1 className="main-heading">Planets</h1>
            {planet.map((planet) => {
                return (
                    <NavLink to={`/planets${planet._id}`}>
                        <div className="planet-card" key={planet._id}>
                            <img src={planet.images.planet} className="planet-img" alt="" />
                            <h3 className="medium-heading">{planet.name}</h3>
                        </div>
                    </NavLink>
                )
            })}
        </div>
    )
}

export default Home;
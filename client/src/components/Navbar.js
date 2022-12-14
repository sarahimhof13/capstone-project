import { NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Navbar = () => {
    // Async function to get all planets from database
  const [planet, setPlanet] = useState([]);

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

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  function hamburgerClick() {
    setHamburgerOpen(!hamburgerOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <NavLink to="/planets">The Planets</NavLink>
        <img src="/assets/icon-hamburger.svg" alt="hamburger" className="hamburger" onClick={hamburgerClick}/>
      </div>
      <div className="sub-heading navbar-container">
        <ul key={planet._id} className={`navbar-list${hamburgerOpen ? "-active" : ""}`}>
          {planet.map((item) => {
            return (
              <li key={item._id}>
                <div className="mobile-nav-planet" style={{backgroundColor: `${item.color}`}}></div>
                <NavLink to={`/planets${item._id}`} className="navbar-links" style={{borderColor: `${item.color}`}}>{item.name}</NavLink>
                <img src="/assets/icon-chevron.svg" alt="arrow icon" className="arrow-icon"/>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={`hamburger ${hamburgerOpen ? "active" : ""}`} onClick={hamburgerClick}>
        <span className="mobile-bar"></span>
        <span className="mobile-bar"></span>
        <span className="mobile-bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;

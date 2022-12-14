// Import style sheet
import "./App.css";

// Import react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PlanetPage from "./components/PlanetPage";
import AddPlanet from "./components/AddPlanet";
import EditPlanet from "./components/EditPlanet";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/planets" element={<Home />} />
            <Route path="/planets:_id" element={<PlanetPage />}/>
            <Route path="/planets/add" element={<AddPlanet />}/>
            <Route path="/planets:_id/edit" element={<EditPlanet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

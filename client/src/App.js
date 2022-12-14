// Import style sheet
import "./App.css";

// Import react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PlanetPage from "./components/PlanetPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/planets" element={<Home />} />
            <Route path="/planets:_id" element={<PlanetPage />}/>
            <Route path="/planets/add" />
            <Route path="/planets:_id/edit" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

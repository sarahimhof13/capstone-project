// Import style sheet
import './App.css';

// Import react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/planets"/>
            <Route path="/planets:_id"/>
            <Route path="/planets/add"/>
            <Route path="/planets:_id/edit"/>
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;


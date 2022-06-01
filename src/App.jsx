import Navbar from "./containers/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customers from "./containers/Customers.jsx";
import Vehicles from "./containers/Vehicles.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Vehicles />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

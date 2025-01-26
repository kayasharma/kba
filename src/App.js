import Header from "./pages/Header";
import "./App.css";
import Timeline from "./pages/Timeline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Robote from "./pages/Robote";
import Home from "./pages/Home";
function App() {
  return (
    // Returning the JSX
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Timeline" element={<Timeline />} />
          <Route path="/Robote" element={<Robote />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

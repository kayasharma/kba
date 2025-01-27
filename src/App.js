import Header from "./pages/Header";
import "./App.css";
import Timeline from "./pages/Timeline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Robote from "./pages/Robote";
import Home from "./pages/Home";
import EventCard from "./pages/EventCard";
import Homepageevents from "./pages/Homepageevents";
import Footer from "./pages/Footer";
import About from "./pages/About";
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
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Homepageevents" element={<Homepageevents />} />
          <Route path="/EventCard" element={<EventCard />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

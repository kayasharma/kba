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
import Gdg from "./pages/Gdg";
import Onspotevents from "./pages/Onspotevents";
import Cs from "./pages/Cs";
import Civil from "./pages/Civil";
import Mech from "./pages/Mech";
import Pahal from "./pages/Pahal";
import Sports from "./pages/Sports";
import Cdips from "./pages/Cdips";
import Cdip from "./pages/Cdip";
import Management from "./pages/Management";
import Law from "./pages/law";
import Specialevents from "./pages/Specialevents";
import BookingPage from "./pages/BookingPage";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
function App() {
  return (
    // Returning the JSX
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/bookingPage" element={<BookingPage />} />
          <Route path="/Timeline" element={<Timeline />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Robote" element={<Robote />} />
          <Route path="/Cs" element={<Cs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Specialevents" element={<Specialevents />} />
          <Route path="/Cdip" element={<Cdip />} />
          <Route path="/Management" element={<Management />} />
          <Route path="/Law" element={<Law />} />
          <Route path="/Cdips" element={<Cdips />} />
          <Route path="/Sports" element={<Sports />} />
          <Route path="/Pahal" element={<Pahal />} />
          <Route path="/Onspotevents" element={<Onspotevents />} />
          <Route path="/Civil" element={<Civil />} />
          <Route path="/Mech" element={<Mech />} />
          <Route path="/" element={<Home />} />
          <Route path="/Gdg" element={<Gdg />} />
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

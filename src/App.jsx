import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Container/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  About,
  Brands,
  Career,
  Contact,
  MissionVision,
  Organizational,
  Partners,
  Updates,
} from "./Pages/index";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/mission&vision" element={<MissionVision />} />
          <Route path="/news&events" element={<Updates />} />
          <Route path="/organizationalchart" element={<Organizational />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

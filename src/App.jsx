import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Container/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { WhoWeAre, Brands, Career, Contact } from "./Pages/index";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/whoweare" element={<WhoWeAre />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/ourbrands" element={<Brands />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

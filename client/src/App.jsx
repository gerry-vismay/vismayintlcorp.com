import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Container/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { WhoWeAre, Brands, Career, Contact } from "./Pages/index";
import Footer from "./Components/Footer";
import ChatWidget from "./chat/ChatWidget";
import PK from "./Pages/platinumkaraoke/PlatinumKaraokePage";
import LF from "./Pages/laifen/LaifenPage";

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

          <Route path="/ourbrands/platinumkaraoke" element={<PK />} />
          <Route path="/ourbrands/laifen" element={<LF />} />
        </Routes>
        <Footer />
      </Router>
      {/* <ChatWidget /> */}
    </>
  );
}

export default App;

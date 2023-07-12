import "./styles/main.css";
import "./styles/media.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import About_us from "./pages/About-us";
import Services from "./pages/Services";
import Our_teams from "./pages/Our-teams";
import Contact_us from "./pages/Contact-us";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="App">
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        <Router>
              <ScrollToTop />
              <Navbar />
              <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<About_us />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/our-teams" element={<Our_teams />} />
                    <Route path="/contact-us" element={<Contact_us />} />
                    <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
              <Footer />
        </Router>
    </div>
  );
}

export default App;

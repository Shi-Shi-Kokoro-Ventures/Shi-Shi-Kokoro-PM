import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Import Home page
import Tenants from "./pages/Tenants"; // Import Tenants page
import Owners from "./pages/Owners"; // Import Owners page
import Contact from "./pages/Contact"; // Import Contact page
import Concierges from "./pages/Concierges"; // Import Concierges page
import Navbar from "./components/Navbar"; // Import Navbar component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/tenants" element={<Tenants />} /> {/* Tenants route */}
        <Route path="/owners" element={<Owners />} /> {/* Owners route */}
        <Route path="/contact" element={<Contact />} /> {/* Contact route */}
        <Route path="/concierges" element={<Concierges />} /> {/* Concierges route */}
      </Routes>
    </Router>
  );
};

export default App; // Export App component
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router
import Home from "./pages/Home"; // Import Home Page
import Tenants from "./pages/Tenants"; // Import Tenants Page
import Owners from "./pages/Owners"; // Import Owners Page
import Contact from "./pages/Contact"; // Import Contact Page
import Concierges from "./pages/Concierges"; // Import Concierges Page

// Navbar Component
function Navbar() {
  return (
    <nav style={styles.navbar}>
      <a style={styles.link} href="/">Home</a>
      <a style={styles.link} href="/tenants">Tenants</a>
      <a style={styles.link} href="/owners">Owners</a>
      <a style={styles.link} href="/contact">Contact</a>
      <a style={styles.link} href="/concierges">Concierges</a>
    </nav>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <Navbar /> {/* Render Navbar at the top */}
      <div style={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for Home Page */}
          <Route path="/tenants" element={<Tenants />} /> {/* Route for Tenants Page */}
          <Route path="/owners" element={<Owners />} /> {/* Route for Owners Page */}
          <Route path="/contact" element={<Contact />} /> {/* Route for Contact Page */}
          <Route path="/concierges" element={<Concierges />} /> {/* Route for Concierges Page */}
        </Routes>
      </div>
    </Router>
  );
}

// Styles for Navbar
const styles = {
  navbar: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
  },
  link: {
    margin: "0 15px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  },
  container: {
    margin: "20px",
    padding: "20px",
  },
};

export default App;

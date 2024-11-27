import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar component
import Home from "./pages/Home"; // Import Home page
import Tenants from "./pages/Tenants"; // Import Tenants page
import Owners from "./pages/Owners"; // Import Owners page
import Contact from "./pages/Contact"; // Import Contact page
import Concierges from "./pages/Concierges"; // Import Concierges page
import Dashboard from "./pages/Dashboard"; // Import Dashboard page
import Login from "./pages/Login"; // Import Login page
import Register from "./pages/Register"; // Import Register page

const App = () => {
    return (
        <Router>
            <Navbar /> {/* Display the navigation bar */}
            <Routes>
                {/* Define your routes */}
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/tenants" element={<Tenants />} />
                <Route path="/owners" element={<Owners />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/concierges" element={<Concierges />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
};

export default App; // Export App component

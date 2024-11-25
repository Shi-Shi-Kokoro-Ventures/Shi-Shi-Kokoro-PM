import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tenants from "./pages/Tenants";
import Owners from "./pages/Owners";
import Contact from "./pages/Contact";
import Concierges from "./pages/Concierges";

const App = () => {
  return (
    <div>
      <nav style={{ padding: "10px", backgroundColor: "#f5f5f5", display: "flex", justifyContent: "space-around" }}>
        <a href="/">Home</a>
        <a href="/tenants">Tenants</a>
        <a href="/owners">Owners</a>
        <a href="/contact">Contact</a>
        <a href="/concierges">Concierges</a>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/owners" element={<Owners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/concierges" element={<Concierges />} />
      </Routes>
    </div>
  );
};

export default App;
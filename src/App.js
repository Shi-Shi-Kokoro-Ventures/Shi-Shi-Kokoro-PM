import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Tenants from './pages/Tenants';
import Owners from './pages/Owners';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/properties">Properties</Link></li>
          <li><Link to="/tenants">Tenants</Link></li>
          <li><Link to="/owners">Owners</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/owners" element={<Owners />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

// Additional Component Definitions
export function Home() {
  return <h1>Welcome to Shi Shi Kokoro Property Management</h1>;
}

export function Properties() {
  return <h1>Properties</h1>;
}

export function Tenants() {
  return <h1>Tenants</h1>;
}

export function Owners() {
  return <h1>Owners</h1>;
}

export function Contact() {
  return <h1>Contact Us</h1>;
}

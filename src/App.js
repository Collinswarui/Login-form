import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginform from './components/login/Loginform';
import Signupform from './components/signup/Signupform';
import LandingPage from './components/landingpage/Landingpage';
import Navbar from './components/navbar/landing.navbar'; // Import the Navbar component
import './components/navbar/landing.navbar.css'; // Import the CSS file for the Navbar

function App() {
  return (
    <Router>
      <Navbar /> {/* Include the Navbar component */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signupform />} />
        <Route path="/login" element={<Loginform />} />
      </Routes>
    </Router>
  );
}

export default App;
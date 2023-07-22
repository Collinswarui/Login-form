import React from  'react';
import { BrowserRouter as Router, Routes, Route, Link } from  'react-router-dom';
import Loginform from './components/Loginform';
import Signupform from './components/Signupform';
import LandingPage from './components/Landingpage';

function App() {
  return (
    <Router>
      <nav>
        <ul>
        {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signupform />} />
        <Route path="/login" element={<Loginform />} />
      </Routes>
    </Router>
  );
}

export default App;
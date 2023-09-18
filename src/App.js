import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated imports
import Login from './components/Login';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

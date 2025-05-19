import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Services from './components/Services';
import Attendance from './components/Attendance';
import SalaryPage from './components/SalaryPage';
import TeamsRoles from './components/TeamsRoles'; 
import ShiftScheduling from './components/ShiftScheduling';
import TrainingPage from './components/TrainingPage'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/salaryPage" element={<SalaryPage />} />
        <Route path="/teamsRoles" element={<TeamsRoles />} />
        <Route path="/shiftScheduling" element={<ShiftScheduling />} />
        <Route path="/trainingPage" element={<TrainingPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;

<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/business/Dashboard";
import PostJob from "./pages/business/PostJob";
import  Applicants  from "./pages/business/Applicants";
import   Profile  from "./pages/business/Profile";
function App() {
  return (
    <Router>
      <Routes>
      <Route path ="/Profile" element={<Profile/>}/>
        <Route path ="/Applicants" element={<Applicants/>}/>
        {/* Dashboard Route */}
        <Route path="/Dashboard" element={<Dashboard />} />
        
        {/* Post a Job Route */}
        <Route path="/PostJob" element={<PostJob />} />
      </Routes>
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/freelancer/Dashboard';
import Profile from './pages/freelancer/Profile';
import SearchJobs from './pages/freelancer/Jobs'; // Updated: Import SearchJobs instead of Jobs
import FreelancerNavbar from './components/freelancer/FreelancerNavbar';

const App = () => {
  return (
    <Router>
      <div className="bg-gradient-to-b from-[#4A148C] to-[#7B1FA2] min-h-screen text-white">
        <FreelancerNavbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/freelancer/profile" element={<Profile />} />
          <Route path="/freelancer/jobs" element={<SearchJobs />} /> {/* Updated route */}
        </Routes>
      </div>
>>>>>>> 310f2208d453a32687c2af443b3732ec297d6a7e
    </Router>
  );
};

export default App;

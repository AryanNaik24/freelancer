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
    </Router>
  );
}

export default App;

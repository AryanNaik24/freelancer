import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/business/Dashboard";
import PostJob from "./pages/business/PostJob";
import { Applicants } from "./pages/business";

function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Applicants/>}/>
        {/* Dashboard Route */}
        <Route path="/" element={<Dashboard />} />
        
        {/* Post a Job Route */}
        <Route path="/PostJob" element={<PostJob />} />
      </Routes>
    </Router>
  );
}

export default App;

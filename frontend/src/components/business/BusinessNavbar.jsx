import React from "react";
import { Link } from "react-router-dom";


const BusinessNavbar = () => {
  return (
    <nav className="h-20 bg-blue-600 p-5 text-white flex justify-between items-center shadow-lg w-full">
      <h1 className=" text-3xl font-serif font-bold tracking-wide">Business</h1>
      
      <div className="flex gap-x-12 text-lg font-small">
				<Link to="/Dashboard" className="text-2xl hover:text-gray-500 transition-all">Dashboard</Link>
			<Link to="/PostJob" className="text-2xl hover:text-gray-500 transition-all">Post a Job</Link>
			<Link to="/Applicants" className="text-2xl hover:text-gray-500 transition-all">Applicants</Link>
			<Link to="/profile" className="text-2xl bg-purple hover:bg-purple-700 text-white px-10 py-4 rounded-full transition-all">
   
    Profile
  
</Link>
	</div>
	



    </nav>
  );
};

export default BusinessNavbar;

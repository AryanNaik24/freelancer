import React from "react";
import  {BusinessNavbar}  from "../../components/business/index";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-blue text-white">
     
      

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <BusinessNavbar />

        {/* Dashboard Content */}
        <div className="p-8 flex flex-col justify-center items-center h-full ">
          <h1 className=" h-40 text-4xl text-black font-bold mb-4">Welcome to Your Business Dashboard</h1>
          <p className="text-lg text-black-200 mb-6">
            Manage your proposals, clients, and track progress in one place.
          </p>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Overview Cards */}
<div className="w-screen grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
  <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800 transform hover:scale-105 hover:bg-blue-50 transition-all text-center">
    <h2 className="text-2xl font-semibold text-blue-700 mb-6">Total Jobs Posted</h2>
    <p className="text-4xl font-extrabold text-gray-900">12</p>
  </div>

  <div className="h-70 bg-white p-6 rounded-lg shadow-lg text-gray-800 transform hover:scale-105 hover:bg-blue-50 transition-all text-center">
    <h2 className="text-2xl font-semibold text-blue-700 mb-6">Applications Received</h2>
    <p className="text-4xl font-extrabold text-gray-900">25</p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800 transform hover:scale-105 hover:bg-blue-50 transition-all text-center">
    <h2 className="text-2xl font-semibold text-blue-700 mb-6">Interviews Scheduled</h2>
    <p className="text-4xl font-extrabold text-gray-900">8</p>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import '../assets/jobcard.css'; // Import the new CSS file


const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="job-card-header mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{job.Title}</h3>
        <span className="text-gray-600">{job.Company}</span>
      </div>
      <p className="text-gray-700 mb-4">{job.Location}</p>
      <p className="text-gray-600 text-sm mb-4">{job.Description}</p>
      <div className="flex justify-between items-center">
        <span className="text-gray-500 text-xs">Posted: {job.PostedDate}</span>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;

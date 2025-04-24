import React from "react";
import '../assets/jobcard.css'; // Import the new CSS file


const JobCard = ({ job }) => {
    return (
        <div className="job-card bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col justify-center items-center">
            <div className="job-card-header text-center mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {job.Title}
                </h3>
                <span className="text-gray-600 text-sm block">
                    {job.Company}
                </span>
            </div>
            <p className="text-gray-700 mb-2 text-center">{job.Location}</p>
            <p className="text-gray-600 text-sm mb-4 text-center">{job.Description}</p>
            <div className="flex justify-between items-center w-full">
                <span className="text-gray-500 text-xs">Posted: {job.PostedDate}</span>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">Apply Now</button>
            </div>
    </div>
    );
};

export default JobCard;

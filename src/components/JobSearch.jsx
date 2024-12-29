import React, { useState } from "react";
import "../assets/JobSearch.css"; // Import the new custom CSS file

const JobSearch = ({ onSearch }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ jobTitle, location });
  };

  return (
    <div className="job-search-container">
      <div className="container mx-auto">
        <h1 className="job-search-title">Job Search</h1>

        <form onSubmit={handleSubmit} className="job-search-form">
          <input
            type="text"
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="job-search-input"
          />
          <input
            type="text"
            placeholder="Location"
            className="job-search-input"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button type="submit" className="job-search-button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobSearch;

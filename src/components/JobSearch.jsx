import React, { useState } from "react";
import "../assets/JobSearch.css"; // Import the new custom CSS file
import herologo from "../assets/hero-logo.png"; // Import the logo image

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
        <h1 className="job-search-title">Get your dream job with Venus Placements.</h1>
        <p className="job-search-subtitle">Search for your desired job matching your skills</p>

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
      <div className="herobox">
        <img src={herologo} alt="Job Search" classname="herologo" />
      </div>
    </div>
  );
};

export default JobSearch;

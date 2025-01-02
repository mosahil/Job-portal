import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import JobSearch from "../components/JobSearch";
import JobCard from "../components/JobCard";
import * as XLSX from "xlsx";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [searchedJobs, setSearchedJobs] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("jobs.xlsx");

        if (!response.ok) {
          throw new Error("Failed to fetch job data");
        }

        const data = await response.arrayBuffer();
        const workbook = XLSX.read(data, { type: "buffer" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const jobData = XLSX.utils.sheet_to_json(sheet);

        setJobs(jobData);
        setSearchedJobs(jobData); // Initially show all jobs
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = ({ jobTitle, location }) => {
    if (!jobTitle && !location) {
      setSearchedJobs(jobs);
      return;
    }

    const searched = jobs.filter(
      (job) =>
        (jobTitle ? job.Title.toLowerCase().includes(jobTitle.toLowerCase()) : true) &&
        (location ? job.Location.toLowerCase().includes(location.toLowerCase()) : true)
    );
    setSearchedJobs(searched);
  };

  if (loading) return <div>Loading jobs...</div>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 py-10">
        <JobSearch onSearch={handleSearch} />
        <h1 className="jobs-heading" >All Jobs</h1>
        <div className="cardcontainer">
          {error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : searchedJobs.length > 0 ? (
            searchedJobs.map((job) => <JobCard key={job.ID} job={job} />)
          ) : (
            <p className="text-center text-gray-500">No jobs found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;



import React from "react";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-gray-600 mt-4">
          venusplacements is your trusted platform for finding the best job
          opportunities tailored to your skills and preferences.
        </p>
      </div>
    </>
  );
};

export default AboutUs;

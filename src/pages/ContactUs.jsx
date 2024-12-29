import React from "react";
import Navbar from "../components/Navbar";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-600 mt-4">For inquiries, reach out to us at contact@alwaysapply.com.</p>
      </div>
    </>
  );
};

export default ContactUs;

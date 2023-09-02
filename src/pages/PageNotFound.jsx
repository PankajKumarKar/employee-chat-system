import React from "react";
import "animate.css/animate.min.css"; // Import animate.css
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="text-6xl font-bold text-gray-600">404</h1>
        <p className="text-2xl text-gray-600">Page Not Found</p>
      </div>
      <div className="mt-8 animate__animated animate__shakeX animate__delay-2s">
        <img
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=626&ext=jpg&ga=GA1.2.689643439.1680022771&semt=ais"
          alt="Not Found Illustration"
          className="w-64 h-64"
        />
      </div>
      <Link
        to={"/"}
        className="px-3 py-3 text-lg bg-green-500 hover:bg-green-700 text-white rounded-md font-semibold"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default PageNotFound;

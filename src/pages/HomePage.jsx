import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row  bg-slate-50 h-screen items-center justify-center gap-x-10">
      <div>
        <img
          src="https://img.freepik.com/free-vector/business-people-teamwork-suit-clothes_40876-2435.jpg?size=626&ext=jpg&ga=GA1.2.1070736208.1691070650&semt=sph"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-y-8">
        <p className=" text-4xl text-gray-400 font-semibold ntransition-transform duration-500 transform hover:scale-110">
          Welcome
        </p>
        <div className=" flex gap-x-8">
          {/*  Sign up Button */}
          <Link
            to={"/signup"}
            className="px-4 py-2 bg-gray-950 text-white font-semibold text-xl rounded-md hover:bg-gray-400 "
          >
            Sign Up
          </Link>
          {/* Login Button */}
          <Link
            to={"/login"}
            className="px-4 py-2 bg-gray-950 text-white font-semibold text-xl rounded-md hover:bg-gray-400"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { logoutHandler } from "../services/employeeService";
import { sendRequestWithBearerToken } from "../services/authorizationReq";
import EmployeeList from "../components/EmployeeList";
import { useNavigate } from "react-router-dom";

export default function EmployeeChatPage() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await sendRequestWithBearerToken();
        setData(response); // Update data state with the API response
      } catch (error) {
        // Handle errors here
        console.error(error);
      }
    }
    fetchDetails();
  }, []); // Empty dependency array to run once on mount

  // ...

  useEffect(() => {
    console.log(data); // Log data when it changes
  }, [data]);

  function logout() {
    logoutHandler();
    navigate("/login");
  }

  return (
    <div>
      {!user ? (
        <div>Token is missing</div>
      ) : (
        <div className="flex h-screen ">
          {/* Left Side: Employee List */}
          <div className="w-1/4 bg-white p-4 border-r border-gray-300">
            {/* Employee list content goes here */}
            <ul className="max-h-screen  overflow-y-auto">
              {data &&
                data.map((emp, idx) => <EmployeeList key={idx} emp={emp} />)}

              {/* Add more employees as needed */}
            </ul>
          </div>
          {/* Right Side: Chat Messages */}
          <div className="w-3/4 bg-gray-200 p-4">
            {/* Chat messages content goes here */}
            <div className="flex flex-col h-full">
              {/* Chat header (if needed) */}
              <div className="bg-white p-4 mb-4 flex justify-between items-center">
                {/* Chat header content goes here */}
                <div className="flex items-center gap-x-4">
                  <img
                    src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.1.1070736208.1691070650&semt=ais"
                    alt=""
                    className="w-12 rounded-full"
                  />
                  <h2 className="text-xl font-semibold">{user.name}</h2>
                </div>
                <button
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Logout
                </button>
              </div>
              {/* Chat messages */}
              <div className="flex-grow bg-white p-4 rounded shadow-lg overflow-y-scroll">
                {/* Individual chat messages go here */}
                <div className="mb-4 flex justify-between">
                  <div className="text-gray-600">Employee 1:</div>
                  <img
                    src="https://img.freepik.com/free-vector/man-with-mustache_1308-83591.jpg?size=626&ext=jpg&ga=GA1.1.1070736208.1691070650&semt=ais"
                    alt=""
                    className="w-14 rounded-full"
                  />
                </div>
                <div className="mb-4">
                  <div className="text-gray-600">You:</div>
                  <div className="bg-green-100 p-2 rounded-lg">
                    Hi! I have a question about the project.
                  </div>
                </div>
                {/* Add more chat messages as needed */}
              </div>
              {/* Chat input area */}
              <div className="bg-white p-4">
                {/* Chat input form goes here */}
                <textarea
                  className="w-full p-2 border rounded"
                  placeholder="Type your message..."
                  defaultValue={""}
                />
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

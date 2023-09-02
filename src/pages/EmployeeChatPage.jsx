import React from "react";

export default function EmployeeChatPage() {
  return (
    <div>
      <div className="flex h-screen">
        {/* Left Side: Employee List */}
        <div className="w-1/4 bg-white p-4 border-r border-gray-300">
          {/* Employee list content goes here */}
          <ul>
            <li className="mb-4 flex justify-between items-center">
              <p className="font-medium">Employee 1</p>
              <img
                src="https://img.freepik.com/free-vector/man-with-mustache_1308-83591.jpg?size=626&ext=jpg&ga=GA1.1.1070736208.1691070650&semt=ais"
                className="w-12 rounded-full"
                alt=""
              />
            </li>
            <li className="mb-4 flex justify-between items-center">
              <p className="font-medium">Employee 2</p>
              <img
                src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.1.1070736208.1691070650&semt=ais"
                className="w-12 rounded-full"
                alt=""
              />
            </li>
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
              <h2 className="text-xl font-semibold">Chat with Employee</h2>
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
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
    </div>
  );
}

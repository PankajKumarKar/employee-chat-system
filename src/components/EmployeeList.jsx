import React from "react";

export default function EmployeeList({ emp }) {
  return (
    <li className="mb-4 flex justify-between items-center">
      {console.log(emp)}
      <p className="font-medium cursor-pointer  hover:text-blue-600">
        {emp.username}
      </p>
      <img
        src="https://img.freepik.com/free-vector/man-with-mustache_1308-83591.jpg?size=626&ext=jpg&ga=GA1.1.1070736208.1691070650&semt=ais"
        className="w-12 rounded-full"
        alt=""
      />
    </li>
  );
}

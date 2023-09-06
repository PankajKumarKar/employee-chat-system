import React from "react";
import { useMessageList } from "../hooks/MessageContext";

export default function EmployeeList({ emp }) {
  const { fetchMessage } = useMessageList();
  const user = JSON.parse(localStorage.getItem("user"));

  function handleMessageList() {
    fetchMessage({
      user1_id: user.id,
      user2_id: emp.id,
      emp_name: emp.username,
    });
  }

  return (
    <li className="mb-4 flex justify-between items-center">
      <p
        className="font-medium cursor-pointer  hover:text-blue-600"
        onClick={handleMessageList}
      >
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

import axios from "axios";
import { CONVERSATION_API } from "../constants/api";

let convDetails;

import { createContext, useState, useContext } from "react";

const MessageContext = createContext();

export function MessageProvider({ children }) {
  const [messageList, setMessageList] = useState();

  // Declare convDetails at a higher scope

  async function fetchMessage(conv) {
    try {
      const res = await axios.post(CONVERSATION_API, conv);
      const { emp_name } = conv;
      convDetails = { ...conv }; // Assign the value to convDetails
      res.data.emp_name = emp_name;
      setMessageList(res.data);
      return { ...conv };
    } catch (error) {
      console.error("Error fetching message:", error);
      throw error; // Rethrow the error to handle it elsewhere if needed
    }
  }

  async function displayMessage() {
    try {
      console.log(convDetails);
      await fetchMessage(convDetails); // Wait for fetchMessage to complete
      // Log the updated convDetails
    } catch (error) {
      console.error("Error displaying message:", error);
    }
  }
  return (
    <MessageContext.Provider
      value={{ messageList, setMessageList, fetchMessage, displayMessage }}
    >
      {children}
    </MessageContext.Provider>
  );
}

export function useMessageList() {
  return useContext(MessageContext);
}

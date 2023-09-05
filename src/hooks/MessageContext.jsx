import axios from "axios";
import { CONVERSATION_API } from "../constants/api";

import { createContext, useState, useContext } from "react";

const MessageContext = createContext();

export function MessageProvider({ children }) {
  const [messageList, setMessageList] = useState();

  async function fetchMessage(conv) {
    const res = await axios.post(CONVERSATION_API, conv);
    const { emp_name } = conv;
    res.data.emp_name = emp_name;
    setMessageList(res.data);
  }
  return (
    <MessageContext.Provider
      value={{ messageList, setMessageList, fetchMessage }}
    >
      {children}
    </MessageContext.Provider>
  );
}

export function useMessageList() {
  return useContext(MessageContext);
}

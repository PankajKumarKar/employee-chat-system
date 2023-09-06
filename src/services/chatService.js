import axios from "axios";
import { SENT_MESSAGE_API } from "../constants/api";

export const sentMessage = async (message) => {
  try {
    const res = await axios.post(SENT_MESSAGE_API, message);
    return res.data;
  } catch (error) {
    console.log("Error while Sent Message", error);
  }
};

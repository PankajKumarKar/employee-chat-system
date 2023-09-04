import axios from "axios";
import { LOGIN_API, SIGNUP_API } from "../constants/api";
import { toast } from "react-toastify";

export const registerHandler = async (user) => {
  try {
    const { data } = await axios.post(SIGNUP_API, user);
    toast.success(data.message);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginHandler = async (user) => {
  try {
    const { data } = await axios.post(LOGIN_API, user);
    toast.success(data.message);
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

export const logoutHandler = () => {
  localStorage.removeItem("user");
  toast.success("Logout Successful !");
};

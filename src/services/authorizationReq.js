import axios from "axios";
import { EMPLOYEE_LIST_API } from "../constants/api";

export const sendRequestWithBearerToken = async () => {
  const { token } = JSON.parse(localStorage.getItem("user"));
  console.log("token", token);

  try {
    const response = await axios.post(
      EMPLOYEE_LIST_API,
      {}, // Request body (if needed)
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Handle the API response here
    return response.data.employees;
  } catch (error) {
    // Handle errors here
    console.error(error);
  }
};

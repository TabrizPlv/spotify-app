import axios from "axios";

export const refreshToken = async (refreshToken) => {
  try {
    const bodyData = { refresh_token: refreshToken };
    const { data } = await axios.post("http://localhost:8888/refreshToken", bodyData);
    return data;
  } catch (error) {
    console.log("Error refreshing token: ", error);
  }
};

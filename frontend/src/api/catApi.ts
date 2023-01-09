import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;
const axiosOption = { withCredentials: true };

export const fetchData = async () => {
  const response = await axios.get(`${baseUrl}/api/cats`, axiosOption);
  return response.data;
};

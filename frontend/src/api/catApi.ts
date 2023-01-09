import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;
const axiosOption = {
  withCredentials: true,
  headers: { "Content-Type": "multipart/form-data" },
};

export const fetchCatData = async () => {
  const response = await axios.get(`${baseUrl}/api/cats`, axiosOption);
  return response.data;
};

export const addCatData = async (data: any) => {
  try {
    console.log(data);
    const response = await axios.post(`${baseUrl}/api/cats`, data, axiosOption);
    return response.data;
  } catch (error) {
    return error;
  }
};

import axios from "axios";
import { catProps } from "../@types/types";

const baseUrl = process.env.REACT_APP_BASEURL;
const axiosOption = { withCredentials: true };

export const fetchCatData = async () => {
  const response = await axios.get(`${baseUrl}/api/cats`, axiosOption);
  return response.data;
};

export const addCatData = async (data: any) => {
  console.log(data);
  const response = await axios.post(`${baseUrl}/api/cats`, data, axiosOption);
  return response.data;
};

import axios from "axios";

export const baseUrl = process.env.REACT_APP_BASEURL;
const axiosOption = {
  withCredentials: true,
  headers: { "Content-Type": "multipart/form-data" },
};

export const fetchCatData = async () => {
  const response = await axios.get(
    `http://localhost:5000/api/cats`,
    axiosOption
  );
  return response.data;
};

export const addCatData = async (data: any) => {
  try {
    console.log(data, "과정");
    const response = await axios.post(
      `http://localhost:5000/api/cats`,
      data,
      axiosOption
    );
    console.log(response.data, "결과");
    return response.data;
  } catch (error) {
    return error;
  }
};

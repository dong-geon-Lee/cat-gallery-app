import React from "react";
import { catProps } from "./@types/types";
import { fetchData } from "./api/catApi";
import { useQuery } from "react-query";

const App: React.FC = () => {
  const { isLoading, isError, error, data } = useQuery<catProps[], Error>(
    "cats",
    fetchData
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;

  // const baseUrl = process.env.REACT_APP_BASEURL;

  // const fetchData = async () => {
  //   const response = await axios.get(`${baseUrl}/api/cats`, {
  //     withCredentials: true,
  //   });
  //   const data = response.data;

  //   setCatItems(data);
  // };

  return (
    <div className="App">
      {data?.map((catItem) => (
        <div key={catItem._id}>
          <img src={catItem.image} />
          <h2>{catItem.breeds}</h2>
          <h2>{catItem.age}</h2>
          <h2>{catItem.name}</h2>
          <p>{catItem.description}</p>
        </div>
      ))}
    </div>
  );
};

export default App;

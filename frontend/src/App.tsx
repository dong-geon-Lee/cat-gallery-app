import React, { useEffect } from "react";
import axios from "axios";
import { catItemState } from "./atoms/catItemState";
import { useRecoilState } from "recoil";
import { catDataProps } from "./@types/types";

const App: React.FC = () => {
  const [catItems, setCatItems] = useRecoilState<catDataProps[]>(catItemState);

  const API_URL = process.env.REACT_APP_BASEURL;

  const fetchData = async () => {
    const response = await axios.get(`${API_URL}/api/cats`, {
      withCredentials: true,
    });
    const data = response.data;

    setCatItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(catItems);

  return (
    <div className="App">
      {catItems &&
        catItems?.map((catItem) => (
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

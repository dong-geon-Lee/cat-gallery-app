import React, { useEffect } from "react";
import axios from "axios";
import { catItemState } from "./atoms/catItemState";
import { useRecoilState } from "recoil";
import { catDataProps } from "./@types/types";

const App: React.FC = () => {
  const [catItems, setCatItems] = useRecoilState<catDataProps[]>(catItemState);

  const url = process.env.REACT_APP_URL;

  const fetchData = async () => {
    const response = await axios.get(
      `https://cat-gallery-backend.onrender.com/api/cats`,
      {
        withCredentials: true,
      }
    );
    const data = response.data;

    setCatItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(catItems);

  return (
    <div className="App">
      {/* {catItems?.map((catItem) => (
        <div key={catItem._id}>
          <img src={catItem.image} />
          <h2>{catItem.breeds}</h2>
          <h2>{catItem.age}</h2>
          <h2>{catItem.name}</h2>
          <p>{catItem.description}</p>
        </div>
      )) || []} */}
      <h1>Hello World 목표는 데이터 받아오기</h1>
    </div>
  );
};

export default App;

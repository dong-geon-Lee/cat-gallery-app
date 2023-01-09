import React from "react";
import { catProps } from "./@types/types";
import { fetchData } from "./api/catApi";
import { useQuery } from "react-query";
import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ToolBox = styled.div`
  padding: 10rem 0;
  width: 100%;
  display: flex;
`;

export const Title = styled.h1`
  font-size: 4.2rem;
`;

export const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  grid-template-rows: auto;
  gap: 12rem 2.6rem;
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-out;

  &:hover {
    cursor: pointer;
    filter: brightness(50%);
  }

  &:hover .cat__types {
    opacity: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #000;
    filter: contrast(100%) invert(100%) sepia(100%) saturate(100%);
    font-size: 3.4rem;
  }
`;

export const CatContents = styled.div``;

export const ImgBox = styled.div``;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const CatIndex = styled.h1`
  font-size: 8.6rem;
  text-align: center;
  position: absolute;
  top: -22%;
  width: 100%;
`;

export const CatTypes = styled.p`
  font-size: 3rem;
  text-align: center;
  width: 100%;
  opacity: 0;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -60%);
  transition: all 0.3s ease-out;
`;

const App: React.FC = () => {
  const { isLoading, isError, error, data } = useQuery<catProps[], Error>(
    "cats",
    fetchData
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;

  console.log(data);

  return (
    <Container>
      <Wrapper>
        <ToolBox>
          <Title>고양이 갤러리</Title>
        </ToolBox>

        <CardBox>
          {data?.map((catItem, index) => (
            <Card key={catItem._id}>
              <CatIndex>
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </CatIndex>
              <ImgBox>
                <Img src={catItem.image} />
              </ImgBox>
              <CatContents>
                <CatTypes className="cat__types">{catItem.breeds}</CatTypes>
              </CatContents>
            </Card>
          ))}
        </CardBox>
      </Wrapper>
    </Container>
  );
};

export default App;

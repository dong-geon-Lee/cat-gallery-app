import React, { useState } from "react";
import { catProps } from "./@types/types";
import { addCatData, baseUrl, fetchCatData } from "./api/catApi";
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

export const Form = styled.form`
  padding: 10rem 0;
  width: 100%;
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

export const Button = styled.button`
  padding: 1.4rem 2.6rem;
  font-size: 1.8rem;
  background-color: #fff;
  display: block;

  &:hover {
    opacity: 0.8;
  }
`;

export const InputBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4.2rem;
  margin: 4.2rem 0;
  justify-items: left;
`;

export const Input = styled.input`
  padding: 1.6rem 3rem;
  display: inline-block;
  font-size: 2.4rem;
`;

export const Label = styled.label`
  font-size: 2.4rem;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 4.2rem;
`;

const App: React.FC = () => {
  const [catInfo, setCatInfo]: any = useState({
    image: "",
    breeds: "",
    age: "",
    name: "",
    description: "",
  });

  const { image, breeds, age, name, description } = catInfo;
  const { isLoading, isError, error, data } = useQuery<catProps[], Error>(
    "cats",
    fetchCatData
  );

  const imageOnchange = (e: any) => {
    setCatInfo((prevState: any) => ({
      ...prevState,
      image: e.target.files[0],
    }));
  };

  const onChange = (e: any) => {
    setCatInfo((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // const imageInput = image;
    // const breedsInput = breeds;
    // const ageInput = age;
    // const nameInput = name;
    // const descriptionInput = description;

    const formData = new FormData();

    formData.append("image", image);
    formData.append("breeds", breeds);
    formData.append("age", age);
    formData.append("name", name);
    formData.append("description", description);

    addCatData(formData);

    // setCatInfo("");
  };

  const handleClick = (e: React.FormEvent) => {
    console.log("나가기");
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;

  console.log(data);

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={onSubmit} encType="multipart/form-data" method="post">
          <Title>고양이 갤러리</Title>
          <InputBox>
            <Box>
              <Label>이미지</Label>
              <Input
                type="file"
                name="image"
                accept=".png, .jpg, .jpeg"
                onChange={imageOnchange}
              />
            </Box>
            <Box>
              <Label>품종</Label>
              <Input
                type="text"
                name="breeds"
                value={breeds}
                onChange={onChange}
                placeholder="품종"
              />
            </Box>
            <Box>
              <Label>나이</Label>
              <Input
                type="text"
                name="age"
                value={age}
                onChange={onChange}
                placeholder="나이"
              />
            </Box>
            <Box>
              <Label>설명</Label>
              <Input
                type="text"
                name="description"
                value={description}
                onChange={onChange}
                placeholder="설명"
              />
            </Box>
            <Box>
              <Label>이름</Label>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                placeholder="이름"
              />
            </Box>
            <Box>
              <Button type="submit">추가하기</Button>
              <Button type="button" onClick={handleClick}>
                나가기
              </Button>
            </Box>
          </InputBox>
        </Form>

        <CardBox>
          {data?.map((catItem: catProps, index) => (
            <Card key={catItem._id}>
              <CatIndex>
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </CatIndex>
              <ImgBox>
                <Img src={`${baseUrl}/${catItem.image}`} />
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

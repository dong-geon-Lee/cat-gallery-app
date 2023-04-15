import React, { useState } from "react";
import { useQuery } from "react-query";
import { catProps } from "../../@types/types";
import { addCatData, fetchCatData } from "../../api/catApi";
import { Box, Button, Form, Input, InputBox, Label, Title } from "./styles";

const CreateCatImage = () => {
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

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("image", image);
    formData.append("breeds", breeds);
    formData.append("age", age);
    formData.append("name", name);
    formData.append("description", description);

    await addCatData(formData);
  };

  const handleClick = (e: React.FormEvent) => {
    console.log("나가기");
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;

  console.log(data);
  console.log(catInfo);

  return (
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
  );
};

export default CreateCatImage;

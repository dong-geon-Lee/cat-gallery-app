import { useQuery } from "react-query";
import { catProps } from "../../@types/types";
import { baseUrl, fetchCatData } from "../../api/catApi";
import {
  Card,
  CardBox,
  CatContents,
  CatIndex,
  CatTypes,
  Container,
  Img,
  ImgBox,
  Wrapper,
} from "./styles";

const CatCardItems = () => {
  const { isLoading, isError, error, data } = useQuery<catProps[], Error>(
    "cats",
    fetchCatData
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;

  return (
    <Container>
      <Wrapper>
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

export default CatCardItems;

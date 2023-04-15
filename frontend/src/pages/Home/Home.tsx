import {
  BtnBox,
  Button,
  Container,
  Header,
  Img,
  ImgBox,
  Li,
  ListBox,
  Ul,
} from "./styles";
import dogs from "../../assets/dog.svg";
import cats from "../../assets/cats.svg";
import fishs from "../../assets/fish.svg";
import horses from "../../assets/horses.svg";
import reptiles from "../../assets/reptiles.svg";
import hearts from "../../assets/hearts.svg";
import { useQuery } from "react-query";
import { catProps } from "../../@types/types";
import { fetchCatData } from "../../api/catApi";

const Home = () => {
  const { isLoading, isError, error, data } = useQuery<catProps[], Error>(
    "cats",
    fetchCatData
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;

  return (
    <Container>
      <Header>
        <ImgBox>
          <Img src="https://petkeen.com/wp-content/uploads/2022/02/pk-logo-white.svg" />
        </ImgBox>

        <Ul>
          <ListBox>
            <Img src={dogs} alt="dogs" />
            <Li>Dogs</Li>
          </ListBox>
          <ListBox>
            <Img src={cats} alt="cats" />
            <Li>Cats</Li>
          </ListBox>
          <ListBox>
            <Img src={fishs} alt="fishs" />
            <Li>Fish</Li>
          </ListBox>
          <ListBox>
            <Img src={horses} alt="horses" />
            <Li>Horses</Li>
          </ListBox>

          <ListBox>
            <Img src={reptiles} alt="reptiles" />
            <Li>Reptiles</Li>
          </ListBox>
        </Ul>

        <BtnBox>
          <Img src={hearts} alt="hearts" className="heart" />
          <Button>Ask a Vet</Button>
        </BtnBox>
      </Header>

      {data?.map((item: catProps) => (
        <div key={item._id}>
          <img
            src={`${process.env.REACT_APP_BASEURL}/${item.image}`}
            alt={item._id}
            style={{ width: "20rem", height: "20rem" }}
          />
          <h1>{item.age}</h1>
          <h1>{item.breeds}</h1>
          <h2>{item.description}</h2>
          <h2>{item.name}</h2>
        </div>
      ))}
    </Container>
  );
};

export default Home;

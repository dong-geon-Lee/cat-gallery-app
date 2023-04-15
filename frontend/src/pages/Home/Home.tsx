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

const Home = () => {
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
    </Container>
  );
};

export default Home;

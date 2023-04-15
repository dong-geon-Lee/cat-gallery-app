import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.header`
  background-color: #187667;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  height: 10rem;
`;

export const ImgBox = styled.div`
  width: 16rem;
  height: 8rem;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;

  &.heart {
    width: 2.6rem;
    height: 2.6rem;
  }
`;

export const Ul = styled.ul`
  display: flex;
  gap: 4rem;
`;

export const ListBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 2.8rem;
`;

export const Li = styled.li`
  font-size: 1.8rem;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #e7ba49;
  border-radius: 1rem;
  padding: 1rem 2rem;
  gap: 1rem;
  box-shadow: 0.2rem 0.6rem 0.4rem rgba(0, 0, 0, 0.5);
`;

export const Button = styled.button`
  background-color: transparent;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
`;

import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 640px;
  height: 413px;
  border-radius: 16px;
  background-color: wheat;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img<{
  borderColor: string;
}>`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;
  z-index: 10;
  border-bottom: 10px solid
    ${({ borderColor, theme }) => {
      switch (borderColor) {
        case "Front-end":
          return theme.palette.categories.frontend.hex();
        case "Back-end":
          return theme.palette.categories.backend.hex();
        default:
          return theme.palette.categories.fullstack.hex();
      }
    }};
`;

export const Autor = styled.div`
  background-color: ${({ theme }) => theme.palette.white.main.hex()};
  border-radius: 50px 50px 50px 50px;
  position: absolute;
  z-index: 12;
  right: 0;
  margin: 20px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.familys.first};
    margin: 20px;
  }

  img {
    width: 35px;
    height: 35px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.palette.green.main.hex()};
  }
`;

export const Category = styled.div<{
  colorBack: string;
}>`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.familys.second};
  color: ${({ theme }) => theme.palette.white.main.hex()};
  background-color: ${({ colorBack, theme }) => {
    switch (colorBack) {
      case "Front-end":
        return theme.palette.categories.frontend.hex();
      case "Back-end":
        return theme.palette.categories.backend.hex();
      default:
        return theme.palette.categories.fullstack.hex();
    }
  }};
  position: absolute;
  z-index: 12;
  bottom: 0;
  margin-left: 50px;
  width: 143px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  margin-top: 520px;
`;

export const Marker = styled.div`
  display: flex;
  position: absolute;
  margin-top: 380px;
  margin-left: 500px;
`;

export const Circle = styled.div<{
  active: boolean;
}>`
  width: 15px;
  height: 15px;
  border-radius: 100px;
  margin-left: 3px;
  background-color: ${({ active, theme }) =>
    active ? theme.palette.pink.main.hex() : theme.palette.white.main.hex()};
  z-index: 15;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;

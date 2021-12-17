import styled from "styled-components";
import "animate.css";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;

  &:hover {
    animation: pulse;
    animation-duration: 2s;
  }
`;

export const Image = styled.div`
  img {
    width: 195px;
    height: 195px;
    border-radius: 100px;
    border: 2px solid ${({ theme }) => theme.palette.white.main.hex()};
    -webkit-box-shadow: 4px 10px 53px -8px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 4px 10px 53px -8px rgba(0, 0, 0, 0.45);
    box-shadow: 4px 10px 53px -8px rgba(0, 0, 0, 0.45);
  }
`;

export const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.white.main.hex()};
  height: 60px;
  width: 253px;
  border-radius: 50px;
  position: absolute;
  z-index: 12;
  margin-top: 185px;

  -webkit-box-shadow: 4px 10px 53px -8px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 4px 10px 53px -8px rgba(0, 0, 0, 0.45);
  box-shadow: 4px 10px 53px -8px rgba(0, 0, 0, 0.45);
`;

export const Name = styled.h1`
  font-size: 24px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.familys.first};
  color: ${({ theme }) => theme.palette.titles.main.hex()};
`;

export const Ocuppation = styled.p`
  font-size: 13px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.familys.first};
  color: ${({ theme }) => theme.palette.texts.main.hex()};
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 606px;
  height: 413px;
  border-radius: 16px;
  background-color: wheat;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;
  z-index: 10;
  border-bottom: 10px solid ${({ theme }) => theme.palette.green.main.hex()};
`;

export const Autor = styled.div`
  background-color: ${({ theme }) => theme.palette.white.main.hex()};
  border-radius: 50px 50px 50px 50px;
  position: absolute;
  z-index: 12;
  right: 0;
  margin: 20px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.familys.first};
    margin: 20px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.palette.green.main.hex()};
  }
`;

export const Category = styled.div`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.familys.second};
  color: ${({ theme }) => theme.palette.white.main.hex()};
  background-color: ${({ theme }) => theme.palette.green.main.hex()};
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

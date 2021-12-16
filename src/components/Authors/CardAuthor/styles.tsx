import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.div`
  img {
    width: 195px;
    height: 195px;
    border-radius: 100px;
    border: 2px solid ${({ theme }) => theme.palette.white.main.hex()};
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

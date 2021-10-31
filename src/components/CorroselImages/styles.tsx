import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
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
`;

export const Autor = styled.div`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.familys.first};
  position: absolute;
  z-index: 12;
  right: 0;
  padding: 15px;
`;

export const Category = styled.div`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.familys.second};
  position: absolute;
  z-index: 12;
  bottom: 0;
`;
